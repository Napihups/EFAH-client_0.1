/**
 * REDUCER - USER EVENTS 
 * Name : Auth
 * Author by : Napihup
 ----------------------------------------------------------------*/

/** required imports */
import { VALIDATING_AUTH_FAIL,
VALIDATING_AUTH_IN_PROGRESS,
VALIDATING_AUTH_SUCCESS } from '../events/auth_validation'


const AuthStates = {
    DATA_ON_LOADING : true,
    isAuthenticated : false,
    token : null,
    error : '',
}
 export function AuthStatesReducer(state = AuthStates, action) {

    switch(action.type) {
        case VALIDATING_AUTH_IN_PROGRESS : {
            return state;
        }
        case VALIDATING_AUTH_SUCCESS : {
            return {
                DATA_ON_LOADING : false,
                isAuthenticated : true, 
                token : action.payload  
            }
        }
        case VALIDATING_AUTH_FAIL : {
            return {
                DATA_ON_LOADING : false,
                isAuthenticated : false, 
                token : null,
                error : ''
            }
        }
    }

    return state;

 }





