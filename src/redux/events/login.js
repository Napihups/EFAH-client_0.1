
/**
 * Event : User login
 * Author by : Napihup
 ----------------------------------------------------------------*/

/**required imports */
import {ApiACTIONS} from "./apis";
import {AuthValACTIONS } from './auth_validation';
import AuthUtils from '../../utils/authUtils';
import apiUrls from '../api_urls';

  /**
  * [Actions]
  */
export const SIGNIN = '[Login] Executing'
export const SIGNIN_IN_PROGRESS = '[Login] In progress'
export const SIGNIN_SUCCESS = '[Login] Success'
export const SIGNIN_FAIL = '[Login] Failed'

export const signinUser = (credentials) => ({
    type : SIGNIN,
    payload : credentials
})

export const signinInProgress = () => ({
    type : SIGNIN_IN_PROGRESS
})

export const signinSuccess = (token) => ({
   type : SIGNIN_SUCCESS,
   payload : token
})

export const signinFail = (failMsg) => ({
    type : SIGNIN_FAIL,
    payload : failMsg
})


/**
* [MIDDLEWARES]
*/
const signinMiddleware = ({dispatch}) => next => action => {

    next(action);
    switch(action.type) {
        case SIGNIN : {

           dispatch(ApiACTIONS.apiRequest('POST', apiUrls.SIGN_IN, action.payload, signinSuccess, signinFail ))
           dispatch(signinInProgress());
        }break;
        case SIGNIN_SUCCESS : {
            // Save token here 
            let token = action.payload;
            AuthUtils.saveTokenToCookie(token);
            dispatch(AuthValACTIONS.validateAuth());
        }
    }
}

export const SigninMW = [signinMiddleware];






