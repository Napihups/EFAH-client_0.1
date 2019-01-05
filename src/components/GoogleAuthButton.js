import React from 'react';
import GoogleLogin from 'react-google-login';
import { authenticateGoogleUser } from '../actions/authActions';
import { withRouter } from "react-router-dom"
// import { saveUserData } from '../modules/dbUtils';
import Store from '../Store';


class GoogleButton extends React.Component {

    constructor(props) {
        super(props);

        const { match, location, history } = this.props;
    }

    render() {
        return(

            <GoogleLogin
            clientId="236924221049-8tu57ld67ajtrn1c6h75h3452engo2mq.apps.googleusercontent.com"
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
        Store.dispatch(authenticateGoogleUser(resp.profileObj))
        // console.log(resp.profileObj);
        // saveUserData(resp.profileObj);
        this.history.push('/user');

    }

    googleFailedAuth = (resp) => {
        // console.log(resp);
        this.history.push('/');
    }
}


const GoogleAuthButton = withRouter(GoogleButton);
export default GoogleAuthButton;