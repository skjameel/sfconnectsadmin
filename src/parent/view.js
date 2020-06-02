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
import { getParentDetails } from './actions';


class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };

    componentWillMount() {
        console.log("View:>>>>>>>>>>>>>>", this.props)
        const queryparams = {
            customizeQuery: `select * from parentlistview where Id=${this.props.match.params.id}`,
        };
        console.log("32634854",this.props.match.params.id);
        this.props.getParentDetails(this.props.match.params.id, queryparams);
    }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/parent-list')
    }
    render() {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.props.parent)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> View Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleBack}>
                    <Form.Item label="Firstname">
                        <Input value={this.props.parent.ParentDetails.Firstname} />
                    </Form.Item>
                    <Form.Item label="Lastname">
                        <Input value={this.props.parent.ParentDetails.Lastname} />
                    </Form.Item>
                    <Form.Item label="Student Name">
                        <Input value={this.props.parent.ParentDetails.First_Name} />
                    </Form.Item>
                    <Form.Item label="Address">
                        <Input value={this.props.parent.ParentDetails.Address} />
                    </Form.Item>
                    <Form.Item label="Phone_number">
                        <Input value={this.props.parent.ParentDetails.Phone_number} />
                    </Form.Item>
                    <Form.Item label="Email_id">
                        <Input value={this.props.parent.ParentDetails.Email_id} />
                    </Form.Item>
                    <Form.Item label="IsActive">
                        <Input value={this.props.parent.ParentDetails.Isactive} />
                    </Form.Item>
                    <Form.Item label="Created By">
                        <Input value={this.props.parent.ParentDetails.createdBy} />
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
            getParentDetails
        },
        dispatch,
    )

const mapStateToProps = state => ({
    parent: state.parent,
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(View),
)