import { 
VALIDATINGAUTHINPROGRESS, 
VALIDATINGAUTHINSUCCESS
,VALIDATINGAUTHINFAILURE 
,VALIDATINGAUTHDONE
} from '../actions/ACT_ui';
import { FETCH_TOKEN_SUCCESS, FETCH_TOKEN_ERROR } from '../actions/ACT_auth';

const authState = {
    isAuthenticated : false,
    error : ''
}


export function authReducer(state = authState, action) {

    switch(action.type) {

        case VALIDATINGAUTHINSUCCESS : {
            return {
                isAuthenticated : true,
            }
        }
        case VALIDATINGAUTHINFAILURE : {
            return {
                isAuthenticated : false,
                error : action.payload
            }
        }
        
    }

    return state;

}

const uiState = {
    DATA_READY : false
}
export function uiAuth(state = uiState, action) {

    switch(action.type) {
        case VALIDATINGAUTHINPROGRESS : {
            return state;
        }
        case VALIDATINGAUTHDONE : {
            return {
                DATA_READY : true
            }
        }
    }

    return state;
}
