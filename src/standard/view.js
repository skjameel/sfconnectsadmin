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
import { getStandardsDetails } from './actions';


class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };

    componentWillMount() {
        console.log("View:>>>>>>>>>>>>>>", this.props)
        const queryparams = {
            customizeQuery: `select * from standardlistview where Id=${this.props.match.params.id}`,
        };
        console.log("32634854 ---------hello",queryparams);
        this.props.getStandardsDetails(this.props.match.params.id, queryparams);
    }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/standard-list')
    }
    render() {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Nnn", this.props)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> View Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleBack}>
                    <Form.Item label="Name">
                        <Input value={this.props.standard.StandardsDetails.standard_name} />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input value={this.props.standard.StandardsDetails.Description} />
                    </Form.Item>
                    <Form.Item label="School Name">
                        <Input value={this.props.standard.StandardsDetails.school_name} />
                    </Form.Item>
                    <Form.Item label="IsActive">
                        <Input value={this.props.standard.StandardsDetails.Isactive} />
                    </Form.Item>
                    <Form.Item label="Created By">
                        <Input value={this.props.standard.StandardsDetails.createdBy} />
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
            getStandardsDetails
        },
        dispatch,
    )

const mapStateToProps = state => ({
    standard: state.standard,
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(View),
)