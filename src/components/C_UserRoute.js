import React , { Component } from 'react';
import Store from '../Store';
import { BrowserRouter as Router, Route, Link, Redirect, Switch  } from "react-router-dom"
// import { userData } from '../APIS_Interfaces/API_User';
import CheckAuth from '../APIS_Interfaces/API_CheckAuth';
import { connect } from 'react-redux';


const UserRoute = ({component : Component, ...rest}) => {
    // let param = rest.params;
    return <Route {...rest} render={(props) => {
        console.log(props.match.params);
        return rest.isAuthenticated === true ? <Component {...props}/> : <Redirect to ="/home"/>
    }} />
}

export default UserRoute;