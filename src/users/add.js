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
import { addUsers } from './actions';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const config = {
  rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { UserType , referenceID,username, password, Isactive} = values;
        console.log(moment().format('DD-MM-YYYY'))
        const queryparams = {
          UserType,
          referenceID,
          username,
          password,
          Isactive,
        };
        this.props.addUsers(queryparams).then(res => {
          console.log("654866666666666666666666",queryparams);
          const { value: { success, data } } = res;
          console.log(success, "success")
          if (success) {
            this.props.history.push('/users-list')
          }
        })
      }
    });
  };

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
          <h2> Add Users</h2>
        </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{ width: '40%' }}>
        <Form.Item label="User Type">
            {getFieldDecorator('UserType', {
              rules: [
                {
                  required: true,
                  message: 'Please input your User Type!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Reference Id" hasFeedback>
            {getFieldDecorator('referenceID', {
              rules: [
                {
                  required: true,
                  message: 'Please input your reference Id!',
                }
              ],
            })(<Input/>)}
            </Form.Item>
            <Form.Item label="Username">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item
            label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!'}],
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
      addUsers
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
  )(WrappedRegistrationForm),
)
