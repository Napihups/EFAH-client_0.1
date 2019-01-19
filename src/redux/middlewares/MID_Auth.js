import { GET_TOKEN, CREATE_TOKEN_SUCCESS, 
    fetchTokenSuccess, fetchTokenError, saveTokenInProgress, 
    tokenSavedDone, getToken,
    SAVE_TOKEN,  
    VALIDATING_AUTH} from '../actions/ACT_auth';
import { validationAuthInProgress , validationAuthSuccess, validationAuthFailed, validationAuthDone } from '../actions/ACT_ui';
import { getCookieToken, saveCookie } from '../../utils/cookieUtils';

export const getAuthToken = ({dispatch}) => next => action => {
    
    next(action);
    switch(action.type) {
        // case GET_TOKEN : {
        //     dispatch(validationAuthInProgress());
        
        //     setTimeout(() => {
        //         let token = getCookieToken();
        //         if(token === undefined) {
        //             dispatch(fetchTokenError());
        //             dispatch(loadedAuth());
        //         } else {
        //             dispatch(fetchTokenSuccess(token));
        //             dispatch(loadedAuth());
        //         }
        //     }, 1000)

        //     break;
        // }

        case CREATE_TOKEN_SUCCESS : {
            dispatch(saveTokenInProgress());
            saveCookie(action.payload);
            dispatch(tokenSavedDone());
            dispatch(getToken());
            // setTimeout(() => {
            //     saveCookie(action.payload);
            //     dispatch(tokenSavedDone());
            // }, 1000)
            break;
        }

        case SAVE_TOKEN : {
            saveCookie(action.payload);
            dispatch(tokenSavedDone());
            break;
        }

        case VALIDATING_AUTH : {
            dispatch(validationAuthInProgress());
            let token = getCookieToken();
                if(token === undefined) {
                    dispatch(validationAuthFailed());
                    dispatch(validationAuthDone())
                } else {
                    dispatch(validationAuthSuccess());
                    dispatch(validationAuthDone())
                }
        }
        
    }
    
}

export const AuthMiddleware = [getAuthToken];




