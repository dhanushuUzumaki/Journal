/* global window */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxtImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import initialState from '../reducers/initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ latency: 0 })
  : compose;

export default () => {
  return createStore(
    combineReducers({
      ...reducers
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxtImmutableStateInvariant()))
  );
};
