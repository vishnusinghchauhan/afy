import React from 'react';
import { Route, Switch,   Redirect, BrowserRouter} from 'react-router-dom';

import Home from './components/Home/Home'
import CreateWebsite from './components/Home/CreateWebsite'

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

import {userService} from "./services/authentication.service";
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        userService.loggedIn() === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)


const routing = () => (
    <div>
		<Switch>
			<Route exact path="/registration" component={Register} label="Register"/>
			<Route exact path="/login" component={Login} label="Login"/>
			<PrivateRoute exact path="/dashboard" component={Home} label="Home"/>
			<PrivateRoute exact path="/create-website" component={CreateWebsite} label="CreateWebsite"/>
		</Switch>
    </div>
)

export default routing;