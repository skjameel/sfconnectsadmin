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
import { addParent } from './actions';
import {
  StudentsList
} from '../student/actions';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  componentWillMount() {
    const queryparams1 = {
      customizeQuery: `select * from student where Isactive='Active' order by Id desc;`,
    };
    this.props.StudentsList(queryparams1);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { Firstname, Lastname, StudentId,Address,Phone_number,Email_id,Isactive } = values;
        console.log(moment().format('DD-MM-YYYY'))
        const queryparams = {
          Firstname,
          Lastname,
          StudentId,
          Address,
          Phone_number,
          Email_id,
          Isactive,
          createdBy: "Admin",
          updatedBy: "Admin",
        };
        console.log("queryparams", queryparams);
        this.props.addParent(queryparams).then(res => {
          const { value: { success, data } } = res;
          console.log(success, "success")
          if (success) {
            this.props.history.push('/parent-list');
          }
        })
      }
    });
  };
  loadStudentsList() {
    const { StudentsList } = this.props.student;
    const arr = [];
    StudentsList.map(cp => {
      arr.push(<Option value={cp.Id}>{cp.First_Name}</Option>);
    })
    return arr;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div>
        <div style={{ margin: '2%' }}>
          <h2> Add Parents</h2>
        </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{ width: '40%' }}>
          <Form.Item label="First Name">
            {getFieldDecorator('Firstname', {
              rules: [
                {
                  required: true,
                  message: 'Please input your First name!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Last Name" hasFeedback>
            {getFieldDecorator('Lastname', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Last name!',
                }
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Student Name" hasFeedback>
            {getFieldDecorator('StudentId', {
              rules: [
                {
                  required: true,
                  message: 'Please input your School Name!',
                }
              ],
            })(<Select style={{ width: 200 }}>
              {this.loadStudentsList()}
            </Select>)}
          </Form.Item>
          <Form.Item label="Address" hasFeedback>
            {getFieldDecorator('Address', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Address!',
                }
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Phone Number" hasFeedback>
            {getFieldDecorator('Phone_number', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Phone_number!',
                }
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Email Id" hasFeedback>
            {getFieldDecorator('Email_id', {
              rules: [
                {
                  type :"email",
                  required: true,
                  message: 'Please input your Email_id!',
                }
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="IsActive">
            {getFieldDecorator('Isactive', {
              rules: [
                {
                  required: true,
                  message: 'Please select the status',
                },
              ],
            })(
              <Radio.Group>
                <Radio.Button value="Active">Active</Radio.Button>
                <Radio.Button value="InActive">InActive</Radio.Button>
              </Radio.Group>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
          <button type="submit" class="btn btn-primary mt-4 pr-4 pl-4">Submit</button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      StudentsList,
      addParent
    },
    dispatch,
  )

const mapStateToProps = state => ({
  student: state.student,
  parent: state.parent,

})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedRegistrationForm),
)
