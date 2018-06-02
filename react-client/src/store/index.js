/* global window */

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reduxtImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ latency: 0 }) : compose;

export default (history) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(
      thunk,
      routerMiddleware(history),
      reduxtImmutableStateInvariant()
    ))
  );
};
