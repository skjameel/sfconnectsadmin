import React from 'react';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import { Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import {
    ParentList,
    deleteParent
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
           
        },
        {
          title: 'Firstname',
          dataIndex: 'Firstname',
          sorter: (a, b) =>a.Firstname.localeCompare(b.Firstname),
            sortDirections: ['descend', 'ascend'],
            ...this.getColumnSearchProps('Firstname'),
        },
        {
          title: 'Lastname',
          dataIndex: 'Lastname',
          sorter: (a, b) =>a.Lastname.localeCompare(b.Lastname),
            sortDirections: ['descend', 'ascend'],
            ...this.getColumnSearchProps('Lastname'),
        },
        {
            title: 'Student Name',
            dataIndex: 'First_Name',
            sorter: (a, b) =>a.First_Name.localeCompare(b.First_Name),
            sortDirections: ['descend', 'ascend'],
            ...this.getColumnSearchProps('First_Name'),
          },
          {
            title: 'Address',
            dataIndex: 'Address',
            sorter: (a, b) =>a.Address.localeCompare(b.Address),
            sortDirections: ['descend', 'ascend'],
            ...this.getColumnSearchProps('Address'),
          },
          {
            title: 'Phone Number',
            dataIndex: 'Phone_number',
            sorter: (a, b) =>a.Phone_number.localeCompare(b.Phone_number),
            sortDirections: ['descend', 'ascend'],
            ...this.getColumnSearchProps('Phone_number'),
          },
          {
            title: 'Email Id',
            dataIndex: 'Email_id',
            sorter: (a, b) =>a.Email_id.localeCompare(b.Email_id),
            sortDirections: ['descend', 'ascend'],
            ...this.getColumnSearchProps('Email_id'),
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
      customizeQuery: `select * from parentlistview where Isactive='Active' order by Id desc;`,
    };
    this.props.ParentList(queryparams);


  }

  onClick = (dataSource) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>.", dataSource, this.props)
    this.props.history.push(`parent-view/${dataSource.Id}`)
  }
  onClickEdit = (dataSource) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>.", dataSource, this.props)
    this.props.history.push(`parent-edit/${dataSource.Id}`)
  }
  onClickDelete = (dataSource) => {
    console.log("DELETEEEEEEEEEEE");
    const queryparams = {
      customizeQuery: `UPDATE parent SET Isactive='InActive' WHERE Id=${dataSource.Id} `,
    };
    console.log("idddddddddddddd", dataSource.Id)
    this.props.deleteParent(this.props.match.params.Id, queryparams).then(res => {
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
    console.log('>>>>>>>>>>>>>>>>>mmmmmmmmmm', this.props.parent);

    return (
      <div className="col-lg-auto">
        <div className="col-md-auto" style={{ marginTop: '1%', marginBottom: '5%' }}>
          <h3>Parents List</h3>
          <div class="col-sm-6 pull-right text-right">
            <a class="btn btn-primary mb-3" style={{color:'White'}} onClick={() => this.props.history.push('/add-parent')} role="button"><i class="ti-plus" data-toggle="dropdown"></i> Add Parents</a>
          </div>
        </div>
        <div className="col-md-auto">
          <Table columns={this.state.columns} dataSource={this.props.parent.ParentList} bordered />
        </div>
      </div>
    );
  }
}

const WrappedList = Form.create({ name: 'register' })(List);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        ParentList,
        deleteParent
    },
    dispatch,
  )

const mapStateToProps = state => ({
    parent: state.parent,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedList),
)