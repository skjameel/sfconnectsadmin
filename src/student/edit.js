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
    getStudentsDetails, updateStudents
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
        this.handleChangeGender = this.handleChangeGender.bind(this);

    };

    componentWillMount() {
        const queryparams1 = {
            customizeQuery: `select * from school where Isactive='Active' order by Id desc;`,
          };
          this.props.SchoolList(queryparams1);
        console.log("View:>>>>>>>>>>>>>>", this.props)
        const queryparams = {
            customizeQuery: `select * from student where Id=${this.props.match.params.id}`,
        };
        this.props.getStudentsDetails(this.props.match.params.id, queryparams).then(res => {
            const { value: { success, data } } = res;
            console.log(JSON.stringify("11111155555555", data));
            console.log("99999999", data);
            this.props.form.setFieldsValue({ Id: data.Id })
            this.props.form.setFieldsValue({ First_Name: data.First_Name })
            this.props.form.setFieldsValue({ Last_Name: data.Last_Name })
            this.props.form.setFieldsValue({ SchoolId: data.SchoolId })
            this.props.form.setFieldsValue({ TagID: data.TagID })
            this.props.form.setFieldsValue({ Isactive: data.Isactive })
            this.props.form.setFieldsValue({ createdBy: data.createdBy })
        });
    }
    handleChangeUsername(e) {
        this.setState({ First_Name: e.target.value })

    }
    handleChangeEmail(e) {
        this.setState({ Last_Name: e.target.value })

    }
    handleChangeGender(e) {
        this.setState({ SchoolId: e.target.value })

    }
    handleChangePassword(e) {
        this.setState({ TagID: e.target.value })

    }
    handleChangeMobileNumber(e) {
        this.setState({ Isactive: e.target.value })

    }
    handleChangePlaceofLiving(e) {
        this.setState({ createdBy: e.target.value })

    }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/student-list')
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { First_Name, Last_Name, SchoolId, TagID, Isactive, createdBy } = values;
                console.log(moment().format('DD-MM-YYYY'))
                const queryparams = {
                    First_Name,
                    Last_Name,
                    SchoolId,
                    TagID,
                    Isactive,
                    createdBy
                };
                console.log('dbfkhjb>>>>>>>>>>', this.props.match.params.id, queryparams)
                this.props.updateStudents(this.props.match.params.id, queryparams).then(res => {
                    const { value: { success, data } } = res;
                    console.log(success, "success")
                    if (success) {
                        this.props.history.push('/student-list')
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
        console.log("11111>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.props.student)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> Edit Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleSubmit}>
                    <Form.Item label="First Name">
                        {getFieldDecorator('First_Name', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your First_Name!'
                                },
                            ],
                        })(<Input name="name" onChange={this.handleChangeUsername} getFieldDecorator={this.props.match.params.First_Name} />)}
                    </Form.Item>
                    <Form.Item label="Last Name">
                        {getFieldDecorator('Last_Name', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Last_Name!',
                                }
                            ],
                        })(<Input type="text" name="name" onChange={this.handleChangeEmail} getFieldDecorator={this.props.match.params.Last_Name} />)}
                    </Form.Item>
                    <Form.Item label="School Name">
                        {getFieldDecorator('SchoolId', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your School Name!',
                                },
                            ],
                        })(<Select style={{ width: 200 }}>
                            {this.loadSchoolList()}
                          </Select>)}
                    </Form.Item>
                    <Form.Item label="Tag Id">
                        {getFieldDecorator('TagID', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your TagID!',
                                },
                            ],
                        })(<Input type="text" name="name" onChange={this.handleChangePassword} getFieldDecorator={this.props.match.params.TagID} />)}
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
            SchoolList,
            updateStudents,
            getStudentsDetails
        },
        dispatch,
    )

const mapStateToProps = state => ({
    school: state.school,
    student: state.student,
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedEdit),
)