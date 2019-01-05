import {combineReducers} from "redux";
import {authReducer, uiAuth } from './RED_Auth';
import {userReducer, uiUser } from './RED_User';


export default combineReducers({
    authReducer,
    uiAuth,
    userReducer,
    uiUser
})