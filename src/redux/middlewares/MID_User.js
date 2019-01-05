import { GET_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../actions/ACT_user';
import { apiRequest } from '../actions/ACT_api';
import { inFetchingUser, loadedUser } from '../actions/ACT_ui';


const URL = 'http://localhost:5000/user/'


export const getUser = ({dispatch}) => next => action => {
    
    next(action);
    // console.log(action)
    if(action.type === GET_USER){
        dispatch(apiRequest('GET', URL, {}, FETCH_USER_SUCCESS, FETCH_USER_ERROR));
        dispatch(inFetchingUser());
    }
}

// export const processUserData = ({dispatch}) => next => action => {
//     next(action);

//     if(action.type === FETCH_USER_SUCCESS) {
//         dispatch()
//         dispatch(loadedUser());
//     }
// }

export const UserMiddleware = [getUser];