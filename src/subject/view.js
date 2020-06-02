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
import { getSubjectsDetails } from './actions';


class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };

    componentWillMount() {
        console.log("View:>>>>>>>>>>>>>>", this.props)
        const queryparams = {
            customizeQuery: `select * from subjectlistview where Id=${this.props.match.params.id}`,
        };
        console.log("32634854",this.props.match.params.id);
        this.props.getSubjectsDetails(this.props.match.params.id, queryparams);
    }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/subjects-list')
    }
    render() {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.props.subject)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> View Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleBack}>
                    <Form.Item label="Name">
                        <Input value={this.props.subject.SubjectsDetails.subject_name} />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input value={this.props.subject.SubjectsDetails.Description} />
                    </Form.Item>
                    <Form.Item label="Class Name">
                        <Input value={this.props.subject.SubjectsDetails.standard_name} />
                    </Form.Item>
                    <Form.Item label="School Name">
                        <Input value={this.props.subject.SubjectsDetails.school_name} />
                    </Form.Item>
                    <Form.Item label="IsActive">
                        <Input value={this.props.subject.SubjectsDetails.Isactive} />
                    </Form.Item>
                    <Form.Item label="Created By">
                        <Input value={this.props.subject.SubjectsDetails.createdBy} />
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
            getSubjectsDetails
        },
        dispatch,
    )

const mapStateToProps = state => ({
    subject: state.subject,
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(View),
)