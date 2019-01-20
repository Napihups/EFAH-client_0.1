/**
 * Name : Auth
 * Author by : Napihup
 ----------------------------------------------------------------*/

 /** required imports */
import {PUSH_ROUTE} from '../events/routes_event';

 const RouteStates = {
     current : '',
     previous : '',
     toNext : false
 }

 export function RouteStatesReducer(state = RouteStates, action) {

    switch(action.type) {
        case PUSH_ROUTE : {
            return {
                current : action.url,
                previous : state.previous,
                toNext : true
            }
        }
    }

 }