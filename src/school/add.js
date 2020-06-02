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
import { addSchool } from './actions';
import {
  CityList
} from '../city/actions';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  componentWillMount() {
    const queryparams = {
        customizeQuery: `select * from city where Isactive='Active' order by Id desc;`,
    };
    this.props.CityList(queryparams);
}

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const {school_name, Address,CityId,Isactive} = values;
        console.log(moment().format('DD-MM-YYYY'))
        const queryparams = {
          school_name,
          Address,
          CityId,
          Isactive,
          createdBy:"Admin",
          updatedBy:"Admin",
        };
        console.log("queryparams",queryparams);
        this.props.addSchool(queryparams).then(res => {
          const { value: { success, data } } = res;
          console.log(success, "success")
          if (success) {
            this.props.history.push('/school-list');
          }
        })
      }
    });
  };
  loadCityList() {
    const { CityList } = this.props.city;
    const arr = [];
    CityList.map(city => {
        arr.push(<Option value={city.Id}>{city.City_name}</Option>);
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
          <h2> Add Schools</h2>
        </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{ width: '40%' }}>
          <Form.Item label="Name">
            {getFieldDecorator('school_name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your school_name!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Address" hasFeedback>
            {getFieldDecorator('Address', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Address!',
                }
              ],
            })(<Input/>)}
          </Form.Item>
          <Form.Item label="City Name" hasFeedback>
            {getFieldDecorator('CityId', {
              rules: [
                {
                  required: true,
                  message: 'Please input your City Name!',
                }
              ],
            })(<Select style={{ width: 200 }}>
              {this.loadCityList()}
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
      CityList,
      addSchool
    },
    dispatch,
  )

const mapStateToProps = state => ({
    city: state.city,
    school: state.school,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedRegistrationForm),
)
