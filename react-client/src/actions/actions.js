import * as actionTypes from './actionTypes';

export const addItem = item => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_ITEM,
      data: {
        item
      }
    });
  };
};

export const removeItem = index => {
  return dispatch => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      data: {
        index
      }
    });
  };
};
