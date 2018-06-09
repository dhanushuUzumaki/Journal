import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ item }) => {
  return (
    <li className="todo-item">
      <span className="item">{item}</span>
      <span className="delete-item">
        <i className="material-icons">check</i>
      </span>
      <span className="delete-item">
        <i className="material-icons">delete</i>
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default TodoItem;
