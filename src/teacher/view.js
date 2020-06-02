import React from 'react';

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Radio,
    DatePicker,
} from 'antd';
import moment from 'moment';
import { Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTeacherDetails } from './actions';


class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };

    componentWillMount() {
        console.log("View:>>>>>>>>>>>>>>", this.props)
        const queryparams = {
            customizeQuery: `select * from teacherlistview where Id=${this.props.match.params.id}`,
        };
        console.log("32634854",this.props.match.params.id);
        this.props.getTeacherDetails(this.props.match.params.id, queryparams);
    }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/teacher-list')
    }
    render() {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.props.teacher)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> View Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleBack}>
                    <Form.Item label="Firstname">
                        <Input value={this.props.teacher.TeacherDetails.Firstname} />
                    </Form.Item>
                    <Form.Item label="Lastname">
                        <Input value={this.props.teacher.TeacherDetails.Lastname} />
                    </Form.Item>
                    <Form.Item label="School Name">
                        <Input value={this.props.teacher.TeacherDetails.school_name} />
                    </Form.Item>
                    <Form.Item label="Subject Name">
                        <Input value={this.props.teacher.TeacherDetails.subject_name} />
                    </Form.Item>
                    <Form.Item label="IsActive">
                        <Input value={this.props.teacher.TeacherDetails.Isactive} />
                    </Form.Item>
                    <Form.Item label="Created By">
                        <Input value={this.props.teacher.TeacherDetails.createdBy} />
                    </Form.Item>
                    <div className="form-actions">
                    <button type="submit" class="btn btn-secondary  mt-4 pr-4 pl-4">Cancel</button>
                    </div>
                </Form>
            </div>
        )
    }
};


const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getTeacherDetails
        },
        dispatch,
    )

const mapStateToProps = state => ({
    teacher: state.teacher,
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(View),
)