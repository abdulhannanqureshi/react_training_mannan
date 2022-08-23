import { createStore, applyMiddleware } from 'redux';
import AppReducer from '../reducer';

import { createLogicMiddleware } from 'redux-logic';
import logger from 'redux-logger';
import AllLogics from '../logic';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

const logicMiddleware = createLogicMiddleware(AllLogics);
/*History for pushing and routing to path */
const history = createBrowserHistory({ basename: '/' });
const middleWares = [logicMiddleware, routerMiddleware(history)];

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger);
}

const store = createStore(AppReducer, applyMiddleware(...middleWares));

export default store;
