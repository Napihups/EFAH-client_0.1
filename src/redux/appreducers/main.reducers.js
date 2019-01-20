import {combineReducers} from "redux";
import { AuthStatesReducer } from './authReducer';
import { UserAccountInfoStatesReducer } from './userAccountInfoReducer';


export default combineReducers({
    AuthStatesReducer,
    UserAccountInfoStatesReducer
})

