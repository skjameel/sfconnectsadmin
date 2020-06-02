import React from 'react'
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd'
import { Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

// import './style.scss'
import ls from 'local-storage'
import {
  getLogin
} from './login-actions';


const FormItem = Form.Item

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imageList: [],
      selectedLocation: [],
      filters: [],
      selectedFilter: {},
      tags: [],
      backgroundImage: 'url(resources/images/login/login.jpg)',
      fullSize: false,
      facebook:null,
      google:null,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openNotificationWithIcon = this.openNotificationWithIcon.bind(this);
    this.passwordNotmatch = this.passwordNotmatch.bind(this);
    this.loginsuccess = this.loginsuccess.bind(this);
  }
  openNotificationWithIcon(type) {
    notification[type]({
      message: 'Error',
      description: 'Please fill Username and password',
    });
  };
  passwordNotmatch(type) {
    notification[type]({
      message: 'Error',
      description: 'Invaild Username and Password.',
    });
  }

  loginsuccess(type) {
    notification[type]({
      message: 'Success',
      description: 'User successfully login.',
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    console.log("1111111111",username);
    if (username, password) {
      const queryparams = {
        customizeQuery: `select * from users where username='${username}' and password='${password}'`,
      };
      console.log("44444444444",queryparams);
      this.props.getLogin(queryparams).then(res => {
        console.log("checkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
        const { value: { success, data } } = res;
        if (data.length<=0) {
          this.passwordNotmatch('error');
        }
        else if (success) {
          console.log(data, "data:::::")
          const { Id,
            username,
            password,
          } = data[0];
          ls.set('Id', Id);
          ls.set('username', username);
          ls.set('password', password);
          this.loginsuccess('success');
          this.props.history.push('/dashboard');
        }
      });
    } else {
      this.openNotificationWithIcon('error');
    }
  }
  // handleSubmitregistartion(e) {
  //   e.preventDefault();
  //   const { name, email } = this.state;
  //   console.log("9999999999",name);
  //   console.log("9999999999",email);
  // }
  handleChangeEmail(e) {
    this.setState({ username: e.target.value })
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value })
  }
  // handleChangefacebook(e) { 
  //   this.setState({ facebook: e.target.value })
  // }
  generateBackground = () => {
    let { backgroundImage } = this.state

    let min = 1
    let max = 5
    let picNumber = Math.floor(Math.random() * (max - min + 1)) + min

    alert(picNumber);
    backgroundImage = 'url(resources/images/login/login.jpg)'
    this.setState({
      backgroundImage: backgroundImage,
    })
  }

  switchSize = () => {
    let { fullSize } = this.state
    fullSize = !fullSize
    this.setState({
      fullSize: fullSize,
    })
  }
  

  render() {
    const { backgroundImage, fullSize } = this.state
    return (
      <div>
      <div class="preloader"></div>
        {/* <div class="loader"></div> */}
    <div class="login-area">
        <div class="container">
					
            <div class="login-box ptb--100">
						

                <form onSubmit={this.handleSubmit} className="login-form">
					<div class="col-12 text-center loginLogo">
						<img src="logo.png"></img>
            </div>
						
					
                    <div class="login-form-head">
                        <h4>Sign In</h4>
                    </div>
                    <div class="login-form-body">
                        <div class="form-gp focused">
                          
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" id="exampleInputEmail1"
                        onChange={this.handleChangeEmail}
                      />
                           <i class="ti-user"></i>
                            <div class="text-danger"></div>
                        </div>
                        <div class="form-gp focused">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                        type="password" id="exampleInputPassword1"                       
                        onChange={this.handleChangePassword}
                      />
                            <i class="ti-lock"></i>
                            <div class="text-danger"></div>
                        </div>
                        <div class="row mb-4 rmber-area">
                            <div class="col-6">
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing" />
                                    <label class="custom-control-label" for="customControlAutosizing">Remember Me</label>
                                </div>
                            </div>
                            <div class="col-6 text-right">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <div class="submit-btn-area">
                        <button type="primary" htmlType="submit">Submit <i class="ti-arrow-right">
                        </i>
                       </button>
                        </div>
                       
                    </div>
                </form>
                </div>
            </div>
        </div>
        
        
    <script src="../assets/js/vendor/jquery-2.2.4.min.js"></script>
  
    <script src="../assets/js/popper.min.js"></script>
    <script src="../assets/js/bootstrap.min.js"></script>
    <script src="../assets/js/owl.carousel.min.js"></script>
    <script src="../assets/js/metisMenu.min.js"></script>
    <script src="../assets/js/jquery.slimscroll.min.js"></script>
    <script src="../assets/js/jquery.slicknav.min.js"></script>
    <script src="../assets/js/plugins.js" /><script />
    <script src="../assets/js/scripts.js" /><script />
    </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getLogin
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
  )(Login),
)
