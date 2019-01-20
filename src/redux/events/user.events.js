/**
 * Event : User Events
 * Author by : Napihup
 ----------------------------------------------------------------*/

/** required imports */
import {ApiACTIONS} from './apis'; 
import apiUrls from '../api_urls';

/**
* [Actions]
*/
export const FETCH_USER = '[User Event ] Fetching User'
export const FETCH_USER_IN_PROGRESS = '[User Event ] Fetching In Progress'
export const FETCH_USER_SUCCESS = '[User Event ] Fetch Success'
export const FETCH_USER_FAILED = '[User Event ] Fetch Failed'


const fetchUser = () => ({
    type : FETCH_USER
})

const fetchingInProgress = () => ({
    type : FETCH_USER_IN_PROGRESS
})

const fetchingSuccess = (user) => ({
    type : FETCH_USER_SUCCESS,
    payload : user
})

const fetchingFailure = (err) => ({
    type : FETCH_USER_FAILED,
    payload : err
})


/**
* [MIDDLEWARES]
*/
const userMiddleware = ({dispatch}) => next => action => {
    next(action);

    switch(action.type){
        case FETCH_USER : {
            dispatch(fetchingInProgress());

            dispatch(ApiACTIONS.apiRequest('GET', apiUrls.FETCH_USER, null,
            fetchingSuccess, fetchingFailure ));
        }break;
        case FETCH_USER_SUCCESS : {
            // if user fetch success
            // let user = action.payload;
        }break;
        case FETCH_USER_FAILED : {
            // if failed to fetch user 
            let err = action.payload;
            console.log(err);
        }
    }
}




/** export modules */
export const UserMW = [userMiddleware];
export const UserACTIONS = {
    fetchUser : fetchUser,
    fetchingInProgress : fetchingInProgress,
    fetchingSuccess : fetchingSuccess,
    fetchingFailure : fetchingFailure
}