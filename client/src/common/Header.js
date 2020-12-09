import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, Link} from "react-router-dom";
//import moment  from 'moment';
import setAuthToken from "../utils/setAuthToken";
import { ToastContainer } from 'react-toastify';
import { logout, fetchUserData } from '../Actions/AuthAction';


import 'react-toastify/dist/ReactToastify.css';

class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
  componentDidMount() {
    console.log("Header loaded")
    setAuthToken()
    this.props.fetchUserData().then((result)=>{
        this.props.getAuth()
    }).catch((err)=>{
    })
  }

  render() {
    var isUserLoggedin =  this.props && this.props.login && this.props.login.loggedIn

      return (
    <>
    <ToastContainer position="top-right" />
    <header className={isUserLoggedin?"topbar":"hide"} data-navbarbg="skin5">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header" data-logobg="skin5">
                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
                    <a className="navbar-brand" href="index.html">
                        <b className="logo-icon p-l-10">
                            <img src="assets/images/logo-icon.png" alt="homepage" className="light-logo" />
                        </b>
                        <span className="logo-text">
                            AFlyCloud
                        </span>
                    </a>
   
                    <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more"></i></a>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                    <ul className="navbar-nav float-left mr-auto">
                        <li className="nav-item d-none d-md-block"><a className="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i className="mdi mdi-menu font-24"></i></a></li>
                        <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark" href="javascript:void(0)"><i className="ti-search"></i></a>
                            <form className="app-search position-absolute">
                                <input type="text" className="form-control" placeholder="Search &amp; enter" /> <a className="srh-btn"><i className="ti-close"></i></a>
                            </form>
                        </li>
                    </ul>
        
                    <ul className="navbar-nav float-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/users/1.jpg" alt="user" className="rounded-circle" width="31" /></a>
                            { isUserLoggedin &&
                                <div className="dropdown-menu dropdown-menu-right user-dd animated">
                                    <NavLink className="dropdown-item"  to="/profile"  ><i className=" fa fa-suitcase"></i>  Profile</NavLink>
                                    <NavLink className="dropdown-item"  to="/"  onClick={(e) => {e.preventDefault(); this.props.logoutRequest()}}   tag={Link}  ><i className="fa fa-user"></i>  Logout</NavLink>
                                </div>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </>

    )
   }
}


const mapStateToProps = (state) => {
  return {
    login: state.login,
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logoutRequest: () => dispatch(logout()),
    fetchUserData: () => dispatch(fetchUserData()),
    getAuth: () => dispatch({type:'GET_AUTH'}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);