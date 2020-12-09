import React from "react";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';

import { LoginUser } from '../../Actions/AuthAction';


class Login extends React.Component {

  constructor() {
    super();
     this.state = {
            email:"",
            password:"",
            errors :{}
    };
    this.submitValue = this.submitValue.bind(this); 
}
submitValue(event){
  event.preventDefault();
  var loginObj = {
    password:this.state.password,
    email:this.state.email,
  }
  console.log("loginObj........",loginObj)
  this.props.LoginUser(loginObj);
}

  render() {
    return (
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
            <div className="auth-box bg-dark">
                <div id="loginform">
                    <form onSubmit={this.submitValue} >
                        <div className="row p-b-30">
                            <div className="col-12">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required=""  defaultValue={this.state.email}  onChange={e => this.setState({ email: e.target.value })}  />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required="" defaultValue={this.state.password}  onChange={e => this.setState({ password: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <div className="p-t-20">
                                        <button className="btn btn-info" type="submit">Login</button>
                                        <NavLink className="btn btn-success float-right" to="/registration">Register</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  LoginUser: (data) => dispatch(LoginUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);