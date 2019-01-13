import { SIGN_IN_GOOGLE, SIGN_OUT, USER_IS_LOGIN_IN, LOGIN_SUCCESS  } from '../actions/ACT_events';
import { apiRequest } from '../actions/ACT_api';
import { createTokenSuccess, 
    createTokenError, 
    createTokenInProgress,
    saveTokenToCookie } from '../actions/ACT_auth';
import { loginSuccess, loginFailure } from '../actions/ACT_events';
// const googleAuthUrl = 'http://localhost:5000/auth/google'
// const facebookAuthUrl = 'http://localhost:5000/auth/facebook'
const loginUrl = 'http://localhost:5000/auth/signin';

export const signingIn = ({dispatch}) => next => action => {

    next(action);

    switch(action.type){
        case SIGN_IN_GOOGLE : {
            console.log('Ops, no google auth available');
        }break;
        case USER_IS_LOGIN_IN : {
            dispatch(apiRequest('POST', loginUrl, action.payload, loginSuccess, loginFailure ));
        }break;
        case LOGIN_SUCCESS : {
            console.log(action.payload, 'LOGIN_SUCCESS');
            dispatch(saveTokenToCookie(action.payload));
        }

    }
}

export const eventMiddleware = [signingIn];