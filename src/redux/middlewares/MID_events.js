import { SIGN_IN_GOOGLE, SIGN_OUT  } from '../actions/ACT_events';
import { apiRequest } from '../actions/ACT_api';
import { createTokenSuccess, createTokenError, createTokenInProgress} from '../actions/ACT_auth'
const googleAuthUrl = 'http://localhost:5000/auth/google'
const facebookAuthUrl = 'http://localhost:5000/auth/facebook'

export const signingIn = ({dispatch}) => next => action => {

    next(action);

    if(action.type === SIGN_IN_GOOGLE) {
        let user = action.payload[0]
        let routeMeta = action.payload[1]
        console.log(user);
        console.log(routeMeta)

        dispatch(apiRequest('POST', googleAuthUrl, user,  createTokenSuccess , createTokenError, routeMeta));
    }
}

export const eventMiddleware = [signingIn];