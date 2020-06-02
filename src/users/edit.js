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
    getUsersDetails, updateUsersDetails
} from './actions';


class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeMobileNumber = this.handleChangeMobileNumber.bind(this);
        // this.handleChangePlaceofLiving = this.handleChangePlaceofLiving.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);

    };

    componentWillMount() {
        console.log("View:>>>>>>>>>>>>>>", this.props)
        const queryparams = {
            customizeQuery: `select * from users where Id=${this.props.match.params.id}`,
        };
        this.props.getUsersDetails(this.props.match.params.id, queryparams).then(res => {
            const { value: { success, data } } = res;
            console.log(JSON.stringify("11111155555555", data));
            console.log("99999999", data);
            this.props.form.setFieldsValue({ Id: data.Id })
            this.props.form.setFieldsValue({ UserType: data.UserType })
            this.props.form.setFieldsValue({ referenceID: data.referenceID })
            this.props.form.setFieldsValue({ username: data.username })
            this.props.form.setFieldsValue({ password: data.password })
            this.props.form.setFieldsValue({ Isactive: data.Isactive })
        });
    }
    handleChangeUsername(e) {
        this.setState({ UserType: e.target.value })

    }
    handleChangeEmail(e) {
        this.setState({ referenceID: e.target.value })

    }
    handleChangeGender(e) {
        this.setState({ username: e.target.value })

    }
    handleChangePassword(e) {
        this.setState({ password: e.target.value })

    }
    handleChangeMobileNumber(e) {
        this.setState({ Isactive: e.target.value })

    }
    // handleChangePlaceofLiving(e) {
    //     this.setState({ createdBy: e.target.value })

    // }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/users-list')
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { UserType, referenceID, username, password, Isactive, createdBy } = values;
                console.log(moment().format('DD-MM-YYYY'))
                const queryparams = {
                    UserType,
                    referenceID,
                    username,
                    password,
                    Isactive,
                    createdBy
                };
                console.log('dbfkhjb>>>>>>>>>>', this.props.match.params.id, queryparams)
                this.props.updateUsersDetails(this.props.match.params.id, queryparams).then(res => {
                    const { value: { success, data } } = res;
                    console.log(success, "success")
                    if (success) {
                        this.props.history.push('/users-list')
                    }
                })
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        console.log("11111>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.props.users)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> Edit Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleSubmit}>
                    <Form.Item label="User Type">
                        {getFieldDecorator('UserType', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your UserType!'
                                },
                            ],
                        })(<Input name="name" onChange={this.handleChangeUsername} getFieldDecorator={this.props.match.params.UserType} />)}
                    </Form.Item>
                    <Form.Item label="Reference Id">
                        {getFieldDecorator('referenceID', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your referenceID!',
                                }
                            ],
                        })(<Input type="text" name="name" onChange={this.handleChangeEmail} getFieldDecorator={this.props.match.params.referenceID} />)}
                    </Form.Item>
                    <Form.Item label="Username">
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ],
                        })(<Input name="name" onChange={this.handleChangeGender} getFieldDecorator={this.props.match.params.username} />)}
                    </Form.Item>
                    <Form.Item label="Password">
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ],
                        })(<Input type="text" name="name" onChange={this.handleChangePassword} getFieldDecorator={this.props.match.params.password} />)}
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
            getUsersDetails,
            updateUsersDetails
        },
        dispatch,
    )

const mapStateToProps = state => ({
    users: state.users,
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedEdit),
)