import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ item, onDelete, id, trash, completed, actionHandler }) => {
  const handleActionClick = () => actionHandler(id);

  const handleActionKeyPress = e => {
    if (e.target.charCode === 13) {
      actionHandler(id);
    }
  };

  const handleKeyPress = e => {
    if (e.target.charCode === 13) {
      onDelete(id);
    }
  };

  const handleClick = () => onDelete(id);

  const getActionIcon = () => {
    if (trash) return 'restore';
    return completed ? 'check_box' : 'check_box_outline_blank';
  };

  return (
    <li className="todo-item">
      <span className={`item ${completed && 'completed'}`}>{item}</span>
      <span
        className="item-action"
        role="button"
        onClick={handleActionClick}
        tabIndex="0"
        onKeyPress={handleActionKeyPress}
      >
        <i className="material-icons">{getActionIcon()}</i>
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
  id: PropTypes.string.isRequired,
  trash: PropTypes.bool,
  completed: PropTypes.bool.isRequired,
  actionHandler: PropTypes.func
};

export default TodoItem;
