import React , { Component } from 'react';
import Store from '../Store';
import { BrowserRouter as Router, Route, Link, Redirect, Switch  } from "react-router-dom"
// import { userData } from '../APIS_Interfaces/API_User';
import CheckAuth from '../APIS_Interfaces/API_CheckAuth';
import { connect } from 'react-redux';


class UnknownRoute extends Component {


    render(){
        console.log("Unknown Route is rendered")
        return(
            this.props.isAuthenticated ? <Redirect to = "/user/ss5845664" />
            : <Redirect to = "/home" />
        );
    }
}


// const connectState = function(state) {
//     let authState = state.AuthState;
//     return {
//         isAuthenticated : authState.isAuthenticated,
//         token : authState.token
//     }
// }
// export default connect(connectState)(UnknownRoute);

export default UnknownRoute;