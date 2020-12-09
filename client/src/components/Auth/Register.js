import React from "react";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';

import { RegisterUSer } from '../../Actions/AuthAction';


class Register extends React.Component {

  constructor() {
    super();
     this.state = {
            name:"",
            email:"",
            password:"",
            cpassword:"",
            errors :{}
    };
    this.submitValue = this.submitValue.bind(this); 
  }

submitValue(event){
  event.preventDefault();
  var registerObj = {
    name:this.state.name,
    email:this.state.email,
    password:this.state.password,
    cpassword:this.state.cpassword
  }
  console.log("loginObj........",registerObj)
  this.props.RegisterUSer(registerObj);
}

  render() {
    return (
      <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
            <div className="auth-box bg-dark ">
                <div>
                    <form onSubmit={this.submitValue} >
                        <div className="row p-b-30">
                            <div className="col-12">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required   defaultValue={this.state.name}  onChange={e => this.setState({ name: e.target.value })}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" required defaultValue={this.state.email}  onChange={e => this.setState({ email: e.target.value })} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required  defaultValue={this.state.password}  onChange={e => this.setState({ password: e.target.value })} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg" placeholder=" Confirm Password" aria-label="Password" aria-describedby="basic-addon1" required required="" defaultValue={this.state.cpassword}  onChange={e => this.setState({ cpassword: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <div className="p-t-20">
                                        <button className="btn btn-info" type="submit">Sign Up</button>
                                        <NavLink className="btn btn-success float-right" to="/login">Login</NavLink>
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
  RegisterUSer: (data) => dispatch(RegisterUSer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
