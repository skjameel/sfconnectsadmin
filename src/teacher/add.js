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
import { addTeacher } from './actions';
import {
  SchoolList
} from '../school/actions';
import {
  SubjectsList
} from '../subject/actions';

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
    const queryparams2 = {
      customizeQuery: `select * from subject where Isactive='Active' order by Id desc;`,
    };
    this.props.SubjectsList(queryparams2);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { Firstname, Lastname, SchoolId,SubjectId, Isactive } = values;
        console.log(moment().format('DD-MM-YYYY'))
        const queryparams = {
          Firstname,
          Lastname,
          SchoolId,
          SubjectId,
          Isactive,
          createdBy: "Admin",
          updatedBy: "Admin",
        };
        console.log("queryparams", queryparams);
        this.props.addTeacher(queryparams).then(res => {
          const { value: { success, data } } = res;
          console.log(success, "success")
          if (success) {
            this.props.history.push('/teacher-list');
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
  loadSubjectsList() {
    const { SubjectsList } = this.props.subject;
    const arr = [];
    SubjectsList.map(cp => {
      arr.push(<Option value={cp.Id}>{cp.subject_name}</Option>);
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
          <h2> Add Teachers</h2>
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
          <Form.Item label="Subject Name" hasFeedback>
            {getFieldDecorator('SubjectId', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Subject Name!',
                }
              ],
            })(<Select style={{ width: 200 }}>
              {this.loadSubjectsList()}
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
      SchoolList,
      SubjectsList,
      addTeacher
    },
    dispatch,
  )

const mapStateToProps = state => ({
  school: state.school,
  subject: state.subject,
  teacher: state.teacher,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedRegistrationForm),
)
