/**
 * Name : User Account info Reducer
 * Author by : Napihup
 ----------------------------------------------------------------*/

/** required imports */
import { FETCH_USER_IN_PROGRESS, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from '../events/user.events';

const UserAccountInfoStates = {
    DATA_ON_LOADING : false,
    user : {}
}
export function UserAccountInfoStatesReducer(state = UserAccountInfoStates, action) {


    switch(action.type) {
        case FETCH_USER_IN_PROGRESS : {
            return {
                DATA_ON_LOADING : true,
            }
        }
        case FETCH_USER_SUCCESS : {
            let userInfo = action.payload;
            return {
                DATA_ON_LOADING : false,
                user : userInfo
            }
        }
        case FETCH_USER_FAILED : {
            return {
                DATA_ON_LOADING : false,
                err : action.payload
            }
        }
    }
    return state;
}

 
