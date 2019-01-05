import { IN_FETCHING_AUTH, LOADED_AUTH } from '../actions/ACT_ui';
import { FETCH_TOKEN_SUCCESS, FETCH_TOKEN_ERROR } from '../actions/ACT_auth';

const authState = {
    isAuthenticated : false,
    token : '',
    error : ''
}


export function authReducer(state = authState, action) {

    switch(action.type) {
        
        case FETCH_TOKEN_SUCCESS : {
            return {

                isAuthenticated : true,
                token : action.payload
            }
        }
        case FETCH_TOKEN_ERROR : {
            return {
                isAuthenticated : false,
                token : '',
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
        case IN_FETCHING_AUTH : {
            return {
                DATA_READY : false
            }
        }
        case LOADED_AUTH : {
            return {
                DATA_READY : true
            }
        }
    }

    return state;
}
