import * as actionTypes from './actionTypes';

export const addItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_ITEM,
      data: {
        item
      }
    });
  };
};

export const removeItem = (index) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      data: {
        index
      }
    });
  };
};

export const setItemStatus = (index, status) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_ITEM_STATUS,
      data: {
        index,
        status
      }
    });
  };
};
