import { ROUTE_ON_LOGIN_SUCCESS, LOGIN_SUCCESS } from '../actions/ACT_events';


const routeState = {
    locationUrl : '',
    nextUrl : '',
    onNext : false
}

export function routeReducer(state = routeState, action) {

    switch(action.type) {
        case ROUTE_ON_LOGIN_SUCCESS : {
            return {
                locationUrl : action.payload.location,
                nextUrl : action.payload.nextUrl,
                onNext : true
            }
        }
    }
    return state;
}



