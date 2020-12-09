import axios from "axios";
import history from '../history'
import { toast } from 'react-toastify';
import { userService } from "../services/authentication.service";

import { LOGIN_SUCCESS , LOGIN_USER_INFO, LOGIN_FAILED, LOGOUT_SUCCESS } from "./types";


export const RegisterUSer=(regObj) => dispatch =>{
    return new Promise((resolve, reject) => {
        return axios.post("/v1/api/users/register", regObj).then((res) => {
            console.log("register response is", res);
            toast.success("User Successfully Register!")
            history.push('/login');
            resolve(true)
        }).catch((err)=>{
            console.log("register error is", err.response)
            if(err.response.status != 200){
                toast.error(err.response.data.message)
            }
            reject(false)
        });
    });
} 

export const LoginUser=(loginObj) => dispatch =>{
    console.log("Login Calling")
    return new Promise((resolve, reject) => {
        return axios.post("/v1/api/users/login", loginObj).then((res) => {
            console.log("loginData response ??????????", res.data);
            userService.setToken(res.data);
            dispatch({ type:LOGIN_SUCCESS,  payload:res.data           })
            history.push('/dashboard');
            window.location.reload();
            resolve(true)
        }).catch((err)=>{
            console.log("Err is ", err)
            dispatch({ type:LOGIN_FAILED })
            history.push('/login');
            if(err.response.status != 200){
                toast.error(err.response.data.message)
            }
            reject(false)
        });
    });
} 


export const logout = () => {
    return (dispatch) => {
        userService.logout();
        history.push('/login');
        window.location.reload();
        dispatch({
            type:LOGOUT_SUCCESS
        })
        dispatch({
            type:LOGIN_USER_INFO,
            payload:{}
        })
    }
}


export const fetchUserData=(data) => dispatch =>{
    return new Promise((resolve, reject) => {
        var user = localStorage.getItem('loggedIn_email')
        var login_user_type = localStorage.getItem('login_as')
        console.log("Fetchuserinfo calleddddddddddddddd", user)
        return axios.get("/v1/api/users/me/" + user).then((res) => {
            console.log("fetchUserData response ", res);
            dispatch({ type:LOGIN_USER_INFO,   payload:res.data    })
            resolve(res)
        }).catch((err)=>{
            console.log("ERR is", err)
            reject(err)
        });
    });
} 


export const addWebsiteInMySite=(webName) => dispatch =>{
    return new Promise((resolve, reject) => {
        return axios.get("/v1/api/users/addwebsite/" + webName).then((res) => {
            console.log("fetchUserData response ", res);
           // dispatch({ type:LOGIN_USER_INFO,   payload:res.data    })
            resolve(res)
        }).catch((err)=>{
            console.log("ERR is", err)
            reject(err)
        });
    });
} 





