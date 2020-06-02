import React from 'react';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import { Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import {
    SubjectsList,deleteSubjects
} from './actions';




class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      columns: [
        {
          ...this.getColumnSearchProps('Id'),
          title: 'Id',
          dataIndex: 'Id',
          render: (text, dataSource) => <a style={{ color: "#1890ff" }} onClick={() => this.onClick(dataSource)}>{text}</a>,
          sorter: (a, b) => a.Id - b.Id,
          sortDirections: ['descend', 'ascend'],
          // ...this.getColumnSearchProps('Id'),
        },
        {
          title: 'Name',
          dataIndex: 'subject_name',
          sorter: (a, b) =>a.subject_name.localeCompare(b.subject_name),
          sortDirections: ['descend', 'ascend'],
          ...this.getColumnSearchProps('subject_name'),
        },
        {
          title: 'Class Name',
          dataIndex: 'standard_name',
          sorter: (a, b) =>a.standard_name.localeCompare(b.standard_name),
          sortDirections: ['descend', 'ascend'],
          ...this.getColumnSearchProps('standard_name'),
        },
        {
          title: 'School Name',
          dataIndex: 'school_name',
          sorter: (a, b) =>a.school_name.localeCompare(b.school_name),
          sortDirections: ['descend', 'ascend'],
          ...this.getColumnSearchProps('school_name'),
        },
      
        {
          title: 'Created By',
          dataIndex: 'createdBy',
          sorter: (a, b) =>a.createdBy.localeCompare(b.createdBy),
          sortDirections: ['descend', 'ascend'],
          ...this.getColumnSearchProps('createdBy'),
        },
        {
          title: 'Actions',
          render: (text, dataSource) => <li><a style={{ color: "#1890ff" }} onClick={() => this.onClickEdit(dataSource)}><Icon type="edit" /></a><br />
          <a style={{ color: "#1890ff" }} onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.onClickDelete(dataSource) } }><Icon type="delete" theme="filled" /></a></li>
        }
      ]
    };
  };
  componentWillMount() {
    console.log(this.props)
    const queryparams = {
      customizeQuery: `select * from subjectlistview where Isactive='Active' order by Id desc;`,
    };
    this.props.SubjectsList(queryparams);


  }

  onClick = (dataSource) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>.", dataSource, this.props)
    this.props.history.push(`subjects-view/${dataSource.Id}`)
  }
  onClickEdit = (dataSource) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>.", dataSource, this.props)
    this.props.history.push(`subjects-edit/${dataSource.Id}`)
  }
  onClickDelete = (dataSource) => {
    console.log("DELETEEEEEEEEEEE");
    const queryparams = {
      customizeQuery: `UPDATE subject SET Isactive='InActive' WHERE Id=${dataSource.Id} `,
    };
    console.log("idddddddddddddd", dataSource.Id)
    this.props.deleteSubjects(this.props.match.params.Id, queryparams).then(res => {
      window.location.reload(false);

    })
    
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        {/* <Space> */}
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        {/* </Space> */}
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    console.log('>>>>>>>>>>>>>>>>>mmmmmmmmmm', this.props.subject);

    return (
      <div className="col-lg-auto">
        <div className="col-md-auto" style={{ marginTop: '1%', marginBottom: '5%' }}>
          <h3>Subjects List</h3>
          <div class="col-sm-6 pull-right text-right">
            <a class="btn btn-primary mb-3" style={{color:'White'}} onClick={() => this.props.history.push('/add-subjects')} role="button"><i class="ti-plus" data-toggle="dropdown"></i> Add Subjects</a>
          </div>
        </div>
        <div className="col-md-auto">
          <Table columns={this.state.columns} dataSource={this.props.subject.SubjectsList} bordered />
        </div>
      </div>
    );
  }
}

const WrappedList = Form.create({ name: 'register' })(List);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        SubjectsList,
        deleteSubjects
    },
    dispatch,
  )

const mapStateToProps = state => ({
    subject: state.subject,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedList),
)