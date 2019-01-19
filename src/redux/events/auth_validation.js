/**
 * Event : Auth Validation
 * Author by : Napihup
 ----------------------------------------------------------------*/

 /** required imports */
import AuthUtils from '../../utils/authUtils';


 /**
  * [Actions]
  */
export const VALIDATE_AUTH = '[Auth Validation] Executing'
export const VALIDATING_AUTH_IN_PROGRESS = '[Auth Validation] In progress'
export const VALIDATING_AUTH_FAIL = '[Auth Validation] Failed'
export const VALIDATING_AUTH_SUCCESS = '[Auth Validation] Success'


const validateAuth = () => ({
     type : VALIDATE_AUTH
 })

const validateAuthInProgress = () => ({
     type : VALIDATING_AUTH_IN_PROGRESS
 })

const validateAuthSuccess = (token) => ({
    type : VALIDATING_AUTH_SUCCESS,
    payload : token
 })

const validateAuthFail = () => ({
     type : VALIDATING_AUTH_FAIL
})


 /**
  * [MIDDLEWARES]
  */
const validateAuthMiddleware = ({dispatch}) => next => action => {

    next(action);

    switch(action.type) {
        case VALIDATE_AUTH : {
            dispatch(validateAuthInProgress());
            setTimeout(() => {
                let token = AuthUtils.getCookieToken();
                if(token === undefined) {
                    dispatch(validateAuthFail());
                } else {
                    dispatch(validateAuthSuccess(token));
                }
            }, 1000)
        }
    }
}

/**export middleware modules */
export const AuthValidationMW =  [validateAuthMiddleware];
export const AuthValACTIONS = {
    validateAuth : validateAuth,
    validateAuthInProgress : validateAuthInProgress,
    validateAuthSuccess : validateAuthSuccess,
    validateAuthFail : validateAuthFail
}
