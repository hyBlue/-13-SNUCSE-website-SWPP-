import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';

import users from './users';

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

const reducer = combineReducers({
  users,
  routing: routerReducer,
})

let store;

if (env === 'development') {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
  store = initialState => createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();
