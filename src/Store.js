import { applyMiddleware, createStore, compose } from 'redux';


// import reducers  from './redux/reducers/RED_main';
// import middlerwares
// import { AuthMiddleware } from './redux/middlewares/MID_Auth';
// import { UserMiddleware } from './redux/middlewares/MID_User';
// import { APIMiddleware } from './redux/middlewares/MID_Api';
// import { eventMiddleware } from './redux/middlewares/MID_events';

/** Required imports */
import AppReducers from './redux/appreducers/main.reducers';
import { AuthValidationMW } from './redux/events/auth_validation';
import { SigninMW } from './redux/events/login';
import { APIMW } from './redux/events/apis';
import {RouteHistoryMW } from './redux/events/routes_event';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    AppReducers,
    composeEnhancers(
      applyMiddleware(...APIMW,
        ...AuthValidationMW,
        ...SigninMW,
        ...RouteHistoryMW),
    )
  );

export default store;