import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.todos, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const { data, type } = action;
  switch (type) {
    case actionTypes.ADD_ITEM: {
      newState.todoItems.unshift(data.item);
      return newState;
    }
    case actionTypes.REMOVE_ITEM: {
      newState.todoItems.splice(data.index, 1);
      return newState;
    }
    default:
      return state;
  }
};
