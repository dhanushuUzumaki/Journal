import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ item, onDelete, id }) => {
  const handleKeyPress = e => {
    if (e.target.charCode === 13) {
      onDelete(id);
    }
  };

  const handleClick = () => onDelete(id);
  return (
    <li className="todo-item">
      <span className="item">{item}</span>
      <span className="complete-item">
        <i className="material-icons">check</i>
      </span>
      <span
        className="delete-item"
        role="button"
        onClick={handleClick}
        tabIndex="0"
        onKeyPress={handleKeyPress}
      >
        <i className="material-icons">delete</i>
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default TodoItem;
