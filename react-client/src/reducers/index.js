import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todoReducer';

export default combineReducers({
  todos,
  router: routerReducer
});
