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
    getStandardsDetails, updateStandards
} from './actions';
import {
    SchoolList
} from '../school/actions';

const { Option } = Select;

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeMobileNumber = this.handleChangeMobileNumber.bind(this);
        this.handleChangePlaceofLiving = this.handleChangePlaceofLiving.bind(this);


    };

    componentWillMount() {
        const queryparams1 = {
            customizeQuery: `select * from school where Isactive='Active' order by Id desc;`,
        };
        this.props.SchoolList(queryparams1);
        console.log("View:>>>>>>>>>>>>>>", this.props)
        const queryparams = {
            customizeQuery: `select * from standard where Id=${this.props.match.params.id}`,
        };
        this.props.getStandardsDetails(this.props.match.params.id, queryparams).then(res => {
            const { value: { success, data } } = res;
            console.log(JSON.stringify("11111155555555", data));
            console.log("99999999", data);
            this.props.form.setFieldsValue({ Id: data.Id })
            this.props.form.setFieldsValue({ standard_name: data.standard_name })
            this.props.form.setFieldsValue({ Description: data.Description })
            this.props.form.setFieldsValue({ SchoolId: data.SchoolId })
            this.props.form.setFieldsValue({ Isactive: data.Isactive })
            this.props.form.setFieldsValue({ createdBy: data.createdBy })
        });
    }
    handleChangeUsername(e) {
        this.setState({ standard_name: e.target.value })

    }
    handleChangeEmail(e) {
        this.setState({ Description: e.target.value })

    }
    handleChangePassword(e) {
        this.setState({ SchoolId: e.target.value })

    }
    handleChangeMobileNumber(e) {
        this.setState({ Isactive: e.target.value })

    }
    handleChangePlaceofLiving(e) {
        this.setState({ createdBy: e.target.value })

    }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/standard-list')
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { standard_name, Description, SchoolId, Isactive, createdBy } = values;
                console.log(moment().format('DD-MM-YYYY'))
                const queryparams = {
                    standard_name,
                    Description,
                    SchoolId,
                    Isactive,
                    createdBy
                };
                console.log('dbfkhjb>>>>>>>>>>', this.props.match.params.id, queryparams)
                this.props.updateStandards(this.props.match.params.id, queryparams).then(res => {
                    const { value: { success, data } } = res;
                    console.log(success, "success")
                    if (success) {
                        this.props.history.push('/standard-list')
                    }
                })
            }
        });

    }
    loadSchoolList() {
        const { SchoolList } = this.props.school;
        const arr = [];
        SchoolList.map(cp => {
            arr.push(<Option value={cp.Id}>{cp.school_name}</Option>);
        })
        return arr;
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        console.log("11111>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.props.standard)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> Edit Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleSubmit}>
                    <Form.Item label="Name">
                        {getFieldDecorator('standard_name', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your standard_name!'
                                },
                            ],
                        })(<Input name="name" onChange={this.handleChangeUsername} getFieldDecorator={this.props.match.params.standard_name} />)}
                    </Form.Item>
                    <Form.Item label="Description">
                        {getFieldDecorator('Description', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Description!',
                                },
                            ],
                        })(<Input name="name" onChange={this.handleChangeEmail} getFieldDecorator={this.props.match.params.Description} />)}
                    </Form.Item>
                    <Form.Item label="School Name">
                        {getFieldDecorator('SchoolId', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your School Name!',
                                }
                            ],
                        })(<Select style={{ width: 200 }}>
                            {this.loadSchoolList()}
                        </Select>)}
                    </Form.Item>
                    <Form.Item label="IsActive">
                        {getFieldDecorator('Isactive', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please select the status',
                                },
                            ],
                        })(<Input name="name" onChange={this.handleChangeMobileNumber} getFieldDecorator={this.props.match.params.Isactive} />)}
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
            SchoolList,
            getStandardsDetails,
            updateStandards
        },
        dispatch,
    )

const mapStateToProps = state => ({
    school: state.school,
    standard: state.standard,
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedEdit),
)