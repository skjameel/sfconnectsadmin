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
    getSchoolDetails, updateSchool
} from './actions';
import {
    CityList
  } from '../city/actions';
  
  const { Option } = Select;

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        // this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeMobileNumber = this.handleChangeMobileNumber.bind(this);
        this.handleChangePlaceofLiving = this.handleChangePlaceofLiving.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);

    };

    componentWillMount() {
        const queryparams1 = {
            customizeQuery: `select * from city where Isactive='Active' order by Id desc;`,
        };
        this.props.CityList(queryparams1);
        console.log("View:>>>>>>>>>>>>>>", this.props)
        const queryparams = {
            customizeQuery: `select * from school where Id=${this.props.match.params.id}`,
        };
        this.props.getSchoolDetails(this.props.match.params.id, queryparams).then(res => {
            const { value: { success, data } } = res;
            console.log(JSON.stringify("11111155555555", data));
            console.log("99999999", data);
            this.props.form.setFieldsValue({ Id: data.Id })
            this.props.form.setFieldsValue({ school_name: data.school_name })
            this.props.form.setFieldsValue({ Address: data.Address })
            this.props.form.setFieldsValue({ CityId: data.CityId })
            this.props.form.setFieldsValue({ Isactive: data.Isactive })
            this.props.form.setFieldsValue({ createdBy: data.createdBy })
        });
    }
    handleChangeUsername(e) {
        this.setState({ school_name: e.target.value })

    }
    handleChangeEmail(e) {
        this.setState({ Address: e.target.value })

    }
    handleChangeGender(e) {
        this.setState({ CityId: e.target.value })

    }
    handleChangeMobileNumber(e) {
        this.setState({ Isactive: e.target.value })

    }
    handleChangePlaceofLiving(e) {
        this.setState({ createdBy: e.target.value })

    }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/school-list')
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { school_name, Address, CityId, Isactive, createdBy } = values;
                console.log(moment().format('DD-MM-YYYY'))
                const queryparams = {
                    school_name,
                    Address,
                    CityId,
                    Isactive,
                    createdBy
                };
                console.log('dbfkhjb>>>>>>>>>>', this.props.match.params.id, queryparams)
                this.props.updateSchool(this.props.match.params.id, queryparams).then(res => {
                    const { value: { success, data } } = res;
                    console.log(success, "success")
                    if (success) {
                        this.props.history.push('/school-list')
                    }
                })
            }
        });
    }
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
        console.log("11111>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.props.school)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> Edit Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleSubmit}>
                    <Form.Item label="Name">
                        {getFieldDecorator('school_name', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your school_name!'
                                },
                            ],
                        })(<Input name="name" onChange={this.handleChangeUsername} getFieldDecorator={this.props.match.params.school_name} />)}
                    </Form.Item>
                    <Form.Item label="Address">
                        {getFieldDecorator('Address', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Address!',
                                }
                            ],
                        })(<Input type="text" name="name" onChange={this.handleChangeEmail} getFieldDecorator={this.props.match.params.Address} />)}
                    </Form.Item>
                    <Form.Item label="City Name">
                        {getFieldDecorator('CityId', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your CityId!',
                                },
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
            CityList,
            updateSchool,
            getSchoolDetails
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
    )(WrappedEdit),
)