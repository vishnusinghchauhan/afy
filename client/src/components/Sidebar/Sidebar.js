import React from "react";
import { connect } from 'react-redux';
import {BrowserRouter as Route, Link,NavLink} from "react-router-dom";


class Sidebar extends React.Component {
  render() {
    var isUserLoggedin =  this.props && this.props.login && this.props.login.loggedIn
    console.log("isUserLoggedinisUserLoggedin", isUserLoggedin)
    return (
          <aside className={isUserLoggedin?"left-sidebar":"hide"}  data-sidebarbg="skin5">
            <div className="scroll-sidebar">

              { !isUserLoggedin &&
                <nav className="sidebar-nav">
                    <ul id="sidebarnav" className="p-t-30">
                        <li className="sidebar-item"> <NavLink className="sidebar-link waves-effect waves-dark sidebar-link"  to="/registration"  tag={Link}  > <i className="mdi fa fa-user"></i> <span className="hide-menu"> Registration </span></NavLink></li>
                        <li className="sidebar-item"> <NavLink className="sidebar-link waves-effect waves-dark sidebar-link"  to="/login"  tag={Link}  > <i className="mdi fa fa-user"></i> <span className="hide-menu"> Login </span> </NavLink></li>
                      </ul>
                </nav>
              }

               { isUserLoggedin &&
                <nav className="sidebar-nav">
                      <ul id="sidebarnav" className="p-t-30">
                          <li className="sidebar-item"> <NavLink className="sidebar-link waves-effect waves-dark sidebar-link"  to="/dashboard"  tag={Link}  > <i className="mdi mdi-view-dashboard"></i> <span className="hide-menu"> Dashboard </span></NavLink></li>
                          <li className="sidebar-item"> <NavLink className="sidebar-link waves-effect waves-dark sidebar-link"  to="/create-website"  tag={Link}  > <i className="mdi mdi-note-plus"></i> <span className="hide-menu"> Create WebSite </span> </NavLink></li>
                      </ul>
                </nav>
              }

            </div>
        </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);