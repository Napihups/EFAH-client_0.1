/**
 * Event : Logout Events
 * Author by : Napihup
 ----------------------------------------------------------------*/

/**required imports */
import { getCookieToken, getdeleteCookie, deleteCookie } from '../../utils/authUtils';
import { ApiACTIONS } from '../events/apis';
import apiUrls from '../api_urls';
import {AuthValACTIONS } from './auth_validation';

/**
* [Actions]
*/
export const SIGNOUT = '[Logout] Executing'
export const SIGNOUT_IN_PROGRESS = '[Logout] In progress'
export const SIGNOUT_SUCCESS = '[Logout] Success'
export const SIGNOUT_FAIL = '[Logout] Failed'


const signoutUser = () => ({
    type : SIGNOUT
})
const signoutInProgress = () => ({
    type : SIGNOUT_IN_PROGRESS
})
const signoutSuccess = (payload) => ({
    type : SIGNOUT_SUCCESS,
    payload : payload
})
const signoutFail = (err) => ({
    type : SIGNOUT_FAIL,
    payload : err
})


/**
* [MIDDLEWARES]
*/
const signoutMiddleware = ({dispatch}) => next => action => {

    next(action);
    switch(action.type) {
        case SIGNOUT : {
            // send token to invalidate on server session
            dispatch(signoutInProgress())
            let token = getCookieToken();
            dispatch(ApiACTIONS.apiRequest('POST', apiUrls.SIGN_OUT, token, signoutSuccess, signoutFail))
        }break;
        case SIGNOUT_SUCCESS : {
           // to do code 
           deleteCookie('token');
           dispatch(AuthValACTIONS.validateAuth());
        }break;
    }
}


/** export modules */
export const LogoutACTIONS = {
    signoutUser : signoutUser,
    signoutInProgress : signoutInProgress,
    signoutSuccess : signoutSuccess,
    signoutFail : signoutFail
}

export const SignoutMW = [signoutMiddleware];