import { IN_FETCHING_USER, LOADED_USER } from '../actions/ACT_ui';
import { FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../actions/ACT_user';


const userState = {
    user : {},
    error : ''
}



export function userReducer(state = userState, action) {
    
    switch(action.type) {

        case FETCH_USER_SUCCESS : {
            return {
                user : action.payload
            }
        }

        case FETCH_USER_ERROR : {
            return {
                user : {},
                error : action.payload
            }
        }
    }

    return state;
}

const uiState = {
    DATA_READY : false,
}
export function uiUser(state = uiState, action ) {

    switch(action.type) {
        case IN_FETCHING_USER : {
            return {
                DATA_READY : false
            }
        }
        case LOADED_USER : {
            return {
                DATA_READY : true
            }
        }
    }

    return state;
}
