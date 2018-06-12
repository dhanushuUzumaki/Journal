/* global window */

import { createStore, applyMiddleware, compose } from 'redux';
import reduxtImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducer from '../reducers';
import initialState from '../reducers/initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ latency: 0 })
  : compose;

export default history => {
  return createStore(
    connectRouter(history)(reducer),
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxtImmutableStateInvariant())),
    routerMiddleware(history)
  );
};
