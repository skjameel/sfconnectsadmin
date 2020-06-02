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
import { getAdminDetails } from './actions';


class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };

    componentWillMount() {
        console.log("View:>>>>>>>>>>>>>>", this.props)
        const queryparams = {
            customizeQuery: `select * from adminListView where Id=${this.props.match.params.id}`,
        };
        console.log("32634854",this.props.match.params.id);
        this.props.getAdminDetails(this.props.match.params.id, queryparams);
    }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/admin-list')
    }
    render() {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.props.admin)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> View Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleBack}>
                    <Form.Item label="Firstname">
                        <Input value={this.props.admin.AdminDetails.Firstname} />
                    </Form.Item>
                    <Form.Item label="Lastname">
                        <Input value={this.props.admin.AdminDetails.Lastname} />
                    </Form.Item>
                    <Form.Item label="School Id">
                        <Input value={this.props.admin.AdminDetails.school_name} />
                    </Form.Item>
                    <Form.Item label="IsActive">
                        <Input value={this.props.admin.AdminDetails.Isactive} />
                    </Form.Item>
                    <Form.Item label="Created By">
                        <Input value={this.props.admin.AdminDetails.createdBy} />
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
            getAdminDetails
        },
        dispatch,
    )

const mapStateToProps = state => ({
    admin: state.admin,
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(View),
)