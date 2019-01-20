
/**
 * Event : Route Events
 * Author by : Napihup
 ----------------------------------------------------------------*/


  /**
  * [Actions]
  */
export const PUSH_ROUTE = '[Route] Pushing to a path'
export const TO_NEXT_LOCATION = '[Route] To next location , done '

export const pushRoute = (history, url) => ({
    type : PUSH_ROUTE,
    payload : {history, url}
})

export const toNextLocation = () => ({
    type : TO_NEXT_LOCATION
})


  /**
  * [Middlewares]
  */

const routeHistoryMiddleware = ({dispatch}) => next => action => {

    next(action);
    switch(action.type) {
        case PUSH_ROUTE : {
            const { history, url } = action.payload;
            history.push(url);
        } break;
    }
}

export const RouteHistoryMW = [routeHistoryMiddleware];


