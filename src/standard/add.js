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
import { addStandards } from './actions';
import {
  SchoolList
} from '../school/actions';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  componentWillMount() {
    const queryparams1 = {
        customizeQuery: `select * from school where Isactive='Active' order by Id desc;`,
    };
    this.props.SchoolList(queryparams1);

}
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const {standard_name, Description,SchoolId,Isactive} = values;
        console.log(moment().format('DD-MM-YYYY'))
        const queryparams = {
          standard_name,
          Description,
          SchoolId,
          Isactive,
          createdBy:'Admin',
          updatedBy:'Admin',
        };
        console.log("queryparams",queryparams);
        this.props.addStandards(queryparams).then(res => {
          const { value: { success, data } } = res;
          console.log(success, "success")
          if (success) {
            this.props.history.push('/standard-list');
          }
        })
      }
    });
  };
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
          <h2> Add Class</h2>
        </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{ width: '40%' }}>
          <Form.Item label="Name">
            {getFieldDecorator('standard_name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your standard!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Description" hasFeedback>
            {getFieldDecorator('Description', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Description!',
                }
              ],
            })(<Input/>)}
          </Form.Item>
          <Form.Item label="School Name" hasFeedback>
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
            })(
              <Radio.Group>
                <Radio.Button value="Active">Active</Radio.Button>
                <Radio.Button value="InActive">InActive</Radio.Button>
              </Radio.Group>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
          <button type="submit" class="btn btn-primary mt-4 pr-4 pl-4">Submit</button>
					{/* <button type="submit" class="btn btn-secondary  mt-4 pr-4 pl-4">Cancel</button> */}
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
      SchoolList,
      addStandards
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
  )(WrappedRegistrationForm),
)
