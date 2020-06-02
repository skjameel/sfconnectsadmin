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
import {
    getUsertypeDetails, updateUsertype
} from './actions';


class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMobileNumber = this.handleChangeMobileNumber.bind(this);
    };

    componentWillMount() {
        console.log("View:>>>>>>>>>>>>>>", this.props)
        const queryparams = {
            customizeQuery: `select * from usertype where Id=${this.props.match.params.id}`,
        };
        this.props.getUsertypeDetails(this.props.match.params.id, queryparams).then(res => {
            const { value: { success, data } } = res;
            console.log(JSON.stringify("11111155555555", data));
            console.log("99999999", data);
            this.props.form.setFieldsValue({ Id: data.Id })
            this.props.form.setFieldsValue({ Type: data.Type })
            this.props.form.setFieldsValue({ Description: data.Description })
            this.props.form.setFieldsValue({ Isactive: data.Isactive })
        });
    }
    handleChangeUsername(e) {
        this.setState({ Type: e.target.value })

    }
    handleChangeEmail(e) {
        this.setState({ Description: e.target.value })
    }
    handleChangeMobileNumber(e) {
        this.setState({ Isactive: e.target.value })
    }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/usertype-list')
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { Type, Description,Isactive } = values;
                console.log(moment().format('DD-MM-YYYY'))
                const queryparams = {
                    Type,
                    Description,
                    Isactive
                };
                console.log('dbfkhjb>>>>>>>>>>', this.props.match.params.id, queryparams)
                this.props.updateUsertype(this.props.match.params.id, queryparams).then(res => {
                    const { value: { success, data } } = res;
                    console.log(success, "success")
                    if (success) {
                        this.props.history.push('/usertype-list')
                    }
                })
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        console.log("11111>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.props.teacher)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> Edit Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleSubmit}>
                    <Form.Item label="Type">
                        {getFieldDecorator('Type', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Type!'
                                },
                            ],
                        })(<Input name="name" onChange={this.handleChangeUsername} getFieldDecorator={this.props.match.params.Type} />)}
                    </Form.Item>
                    <Form.Item label="Description">
                        {getFieldDecorator('Description', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Description!',
                                }
                            ],
                        })(<Input type="text" name="name" onChange={this.handleChangeEmail} getFieldDecorator={this.props.match.params.Description} />)}
                    </Form.Item>
                    <Form.Item label="IsActive">
                        {getFieldDecorator('Isactive', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please select the status',
                                },
                            ],
                        })(<Input type="text" name="name" onChange={this.handleChangeMobileNumber} getFieldDecorator={this.props.match.params.Isactive} />)}
                    </Form.Item>
                    <button type="submit" class="btn btn-primary mt-4 pr-4 pl-4">Update</button>
                </Form>
                <Form onSubmit={this.handleBack}>
                        <button type="submit" class="btn btn-secondary  mt-4 pr-4 pl-4">Cancel</button>               
                </Form>
            </div>
        )
    }
};

const WrappedEdit = Form.create({ name: 'register' })(Edit);

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            updateUsertype,
            getUsertypeDetails
        },
        dispatch,
    )

const mapStateToProps = state => ({
    usertype: state.usertype,
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedEdit),
)