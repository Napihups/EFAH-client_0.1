import { GET_TOKEN, CREATE_TOKEN_SUCCESS, fetchTokenSuccess, fetchTokenError, saveTokenInProgress, tokenSavedDone, getToken  } from '../actions/ACT_auth';
import { inFetchingAuth , loadedAuth } from '../actions/ACT_ui';
import { getCookieToken, saveCookie } from '../../utils/cookieUtils';

export const getAuthToken = ({dispatch}) => next => action => {
    
    next(action);
    console.log(action)
    switch(action.type) {
        case GET_TOKEN : {
            dispatch(inFetchingAuth());
        
            setTimeout(() => {
                let token = getCookieToken();
                if(token === undefined) {
                    dispatch(fetchTokenError());
                    dispatch(loadedAuth());
                } else {
                    dispatch(fetchTokenSuccess(token));
                    dispatch(loadedAuth());
                }
            }, 1000)

            break;
        }

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
    }
    
}

export const AuthMiddleware = [getAuthToken];




