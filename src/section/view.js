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
import { getSectionsDetails } from './actions';


class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };

    componentWillMount() {
        console.log("View:>>>>>>>>>>>>>>", this.props)
        // const queryparams = {
        //     customizeQuery: `select * from section where Id=${this.props.match.params.id}`,
        // };
        const queryparams1 = {
            customizeQuery: `select * from sectionlistview where Id=${this.props.match.params.id}`,
          };
        console.log("32634854",this.props.match.params.id,queryparams1);
        // this.props.getSectionsDetails(this.props.match.params.id, queryparams);
        this.props.getSectionsDetails(this.props.match.params.id,queryparams1);
          
    }
    handleBack = e => {
        e.preventDefault();
        this.props.history.push('/sections-list')
    }
    render() {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.props.section)
        return (
            <div>
                <div style={{ margin: '2%' }}>
                    <h2> View Page</h2>

                </div>
                <Form style={{ width: '40%' }} onSubmit={this.handleBack}>
                    <Form.Item label="Name">
                        <Input value={this.props.section.SectionsDetails.Name} />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input value={this.props.section.SectionsDetails.Description} />
                    </Form.Item>
                    <Form.Item label="Class Name">
                        <Input value={this.props.section.SectionsDetails.standard_name} />
                    </Form.Item>
                    <Form.Item label="School Name">
                        <Input value={this.props.section.SectionsDetails.school_name} />
                    </Form.Item>
                    <Form.Item label="IsActive">
                        <Input value={this.props.section.SectionsDetails.Isactive} />
                    </Form.Item>
                    <Form.Item label="Created By">
                        <Input value={this.props.section.SectionsDetails.createdBy} />
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
            getSectionsDetails,
            
        },
        dispatch,
    )

const mapStateToProps = state => ({
    section: state.section,
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(View),
)