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
import { getCityDetails } from './actions';


class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };

    componentWillMount() {
        console.log("View:>>>>>>>>>>>>>>", this.props)
        const queryparams = {
            customizeQuery: `select * from city where Id=${this.props.match.params.id}`,
        };
        console.log("32634854",this.props.match.params.id);
        this.props.getCityDetails(this.props.match.params.id, queryparams);
    }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/city-list')
    }
    render() {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.props.city)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> View Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleBack}>
                    <Form.Item label="Name">
                        <Input value={this.props.city.CityDetails.City_name} />
                    </Form.Item>
                    <Form.Item label="Address">
                        <Input value={this.props.city.CityDetails.Country} />
                    </Form.Item>
                    <Form.Item label="IsActive">
                        <Input value={this.props.city.CityDetails.Isactive} />
                    </Form.Item>
                    <Form.Item label="Created By">
                        <Input value={this.props.city.CityDetails.createdBy} />
                    </Form.Item>
                    <div className="form-actions">
                    <button type="submit" class="btn btn-secondary  mt-4 pr-4 pl-4">Cancel</button>
                    </div>
                </Form>
            </div>
        )
    }
};


const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getCityDetails
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
    )(View),
)