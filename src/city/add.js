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
import { addCity } from './actions';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

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
        const {City_name, Country,Isactive} = values;
        console.log(moment().format('DD-MM-YYYY'))
        const queryparams = {
          City_name,
          Country,
          Isactive,
          createdBy:"Admin",
          updatedBy:"Admin",
        };
        console.log("queryparams",queryparams);
        this.props.addCity(queryparams).then(res => {
          const { value: { success, data } } = res;
          console.log(success, "success")
          if (success) {
            this.props.history.push('/city-list');
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
          <h2> Add Cities</h2>
        </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{ width: '40%' }}>
          <Form.Item label="Name">
            {getFieldDecorator('City_name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your City_name!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Country" hasFeedback>
            {getFieldDecorator('Country', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Country!',
                }
              ],
            })(<Input/>)}
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
      addCity
    },
    dispatch,
  )

const mapStateToProps = state => ({
    city: state.city,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedRegistrationForm),
)
