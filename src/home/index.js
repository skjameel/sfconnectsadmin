import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Statistic, Button, Row, Col, Avatar } from 'antd';
import { Switch, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/themify-icons.css';
import '../assets/css/metisMenu.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/slicknav.min.css';

import '../assets/css/typography.css';
import '../assets/css/default.css';
import '../assets/css/styles.css';
import '../assets/css/responsive.css';
import './style.scss'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        };
    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <div>
                <div class="preloader">
                    
                </div>

                <div class="page-container ">
                    
                    <div class="sidebar-menu">
                        <div class="sidebar-header">
                            <div class="logo">
                                <a href="javascript: void(0);"><img src="logo1.png" alt="logo" />
                                </a>
                            </div>
                        </div>

                        <div class="main-menu">
                            <div class="menu-inner">
                                <nav>
                                    <ul class="metismenu" id="menu">
                                        <li>
                                            <a href="javascript:void(0)" onClick={() => this.props.history.push('/standard-list')} aria-expanded="true"><i class="ti-desktop"></i><span>Class</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" onClick={() => this.props.history.push('/sections-list')} aria-expanded="true"><i class="ti-layout-sidebar-left"></i><span>Groups
                                    
                                    </span></a>
                                            
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" onClick={() => this.props.history.push('/city-list')} aria-expanded="true"><i class="ti-map-alt"></i><span>Cities</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" onClick={() => this.props.history.push('/school-list')} aria-expanded="true"><i class="ti-palette"></i><span>Schools</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" onClick={() => this.props.history.push('/teacher-list')} aria-expanded="true"><i class="ti-briefcase"></i><span>Teachers</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" onClick={() => this.props.history.push('/student-list')} aria-expanded="true"><i class="ti-id-badge"></i><span>Students</span></a>
                                        </li>
                                        <li><a href="javascript:void(0)" onClick={() => this.props.history.push('/subjects-list')} aria-expanded="true"><i class="ti-bookmark-alt"></i> <span>Subjects</span></a></li>
                                        <li><a href="javascript:void(0)" onClick={() => this.props.history.push('/parent-list')} aria-expanded="true"><i class="ti-user"></i> <span>Parents</span></a></li>
                                        <li>
                                            <a href="javascript:void(0)" onClick={() => this.props.history.push('/usertype-list')} aria-expanded="true"><i class="ti-receipt"></i> <span>User Type</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" onClick={() => this.props.history.push('/admin-list')} aria-expanded="true"><i class="ti-marker"></i>
                                                <span>Admin</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" onClick={() => this.props.history.push('/superadmin-list')} aria-expanded="true"><i class="ti-pencil-alt"></i> <span>Super Admin</span></a>
                                        </li>
                                                <li><a href="javascript:void(0)" onClick={() => this.props.history.push('/users-list')} aria-expanded="true"><i class="ti-user"></i> <span>Users</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="main-content">

                        <div class="header-area">
                            <div class="row align-items-center">

                                <div class="col-md-6 col-sm-8 clearfix">
                                    <div class="nav-btn pull-left">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>

                                </div>

                                <div class="col-md-6 col-sm-4 clearfix">

                                    <div class="user-profile pull-right">
                                    <i class="ti-user avatar user-thumb" data-toggle="dropdown"></i>
                                            <DropdownButton id="dropdown-basic-button" title="Administrator">
                                                <Dropdown.Item href="#">My Profile</Dropdown.Item>
                                                <Dropdown.Item href="/">Logout</Dropdown.Item>
                                            </DropdownButton> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="page-title-area">
             
            </div>
            <Layout>
            
                                <div className="ant-layout" style={{ backgroundColor: '#ffff' }}>
                                <div className="ant-layout-content">{this.props.children}</div>
                    </div>          
                </Layout>
                    </div>
                </div>
              
                <footer>
                    <div class="footer-area">
                        <p>© Copyright 2020 We Connect. All right reserved. Developed by <a href="#">Flash Infolabs</a>.</p>
                    </div>
                </footer>
                <script src="../assets/js/vendor/jquery-2.2.4.min.js"></script>

                <script src="../assets/js/popper.min.js"></script>
                <script src="../assets/js/bootstrap.min.js"></script>
                <script src="../assets/js/owl.carousel.min.js"></script>
                <script src="../assets/js/metisMenu.min.js"></script>
                <script src="../assets/js/jquery.slimscroll.min.js"></script>
                <script src="../assets/js/jquery.slicknav.min.js"></script>


                <script src="../assets/js/plugins.js"></script>
                <script src="../assets/js/scripts.js"></script>

            </div>
        )
    }
}



const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            
        },
        dispatch,
    )

const mapStateToProps = state => ({
    login: state.login,
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Home),
)
