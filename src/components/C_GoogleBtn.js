import React , { Component } from 'react';
import GoogleLogin from 'react-google-login';
import Store from '../Store';
import { connect } from 'react-redux';
import { signInGoogle } from '../redux/actions/ACT_events';
import { withRouter } from "react-router-dom"


class GoogleButton extends Component {

    constructor(props){
        super(props);
    }


    render(){
        // console.log(this.props.match.path);
        return(
            <GoogleLogin
            clientId="431592760330-c2o6mjp7pc0qvdgkbk40gia6prak9oht.apps.googleusercontent.com"
            render={renderProps => (
                <button  onClick={renderProps.onClick} className="btn btn-lg btn-light mb-1" 
                style={{width : '270px'}}><i className="fab fa-google mr-2"></i> Sign in with google</button>
            )}
            buttonText="Login"
            onSuccess={this.googleSuccessAuth}
            onFailure={this.googleFailedAuth}
            />

        );  
    }

    googleSuccessAuth = (resp) => {
        resp.profileObj.uType = this.props.uType;
        console.log(resp.profileObj);
        let routeMeta = {
            history : this.props.history,
            location : this.props.match.path,
            nextUrl : '/user'
        }
        Store.dispatch(signInGoogle(resp.profileObj, routeMeta));
        // console.log(resp.profileObj);
        // saveUserData(resp.profileObj);
        // this.props.history.push('/user');

    }

    googleFailedAuth = (resp) => {
        // console.log(resp);
        console.log(resp);
        // this.props.history.push('/');
    }


}

const GoogleAuthButton = withRouter(GoogleButton);
export default GoogleAuthButton;