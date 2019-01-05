import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import AppState from './States/AppState';
import { composeWithDevTools  } from 'redux-devtools-extension';

import reducers  from './redux/reducers/RED_main';
// import middlerwares
import { AuthMiddleware } from './redux/middlewares/MID_Auth';
import { UserMiddleware } from './redux/middlewares/MID_User';
import { APIMiddleware } from './redux/middlewares/MID_Api';
import { eventMiddleware } from './redux/middlewares/MID_events';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middleware = applyMiddleware(promise(), thunk, logger, 
// ...AuthMiddleware, ...UserMiddleware, ...APIMiddleware);

// var store = createStore(composeWithDevTools(
//     reducers,
//     middleware
// ));


const store     = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(...AuthMiddleware, ...UserMiddleware, ...APIMiddleware, ...eventMiddleware),
    )
  );

  export default store;