import React from 'react';
import ClassNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

const NO_ITEM_MESSAGE = ":( You don't have anything on the list. Add one and get started";

class TodoApp extends React.Component {
  constructor (props) {
    super(props);

    this.renderItems = () => this._renderItems();
    this.toggleCompleted = index => this._toggleCompleted(index);
    this.removeItem = index => this._removeItem(index);
    this.addItemToList = () => this._addItemToList();
    this.addItemButtonPressed = e => this._addItemButtonPressed(e);
  }

  _addItemButtonPressed (e) {
    if (e.which === 13) {
      this.addItemToList();
    }
  }

  _addItemToList () {
    const item = {
      description: this.addInputComp.value,
      completed: false
    };
    this.props.dispatch(actions.addItem(item));
  }

  _removeItem (index) {
    this.props.dispatch(actions.removeItem(index));
  }

  _toggleCompleted (index) {
    const status = !this.props.todoItems[index].completed;
    this.props.dispatch(actions.setItemStatus(index, status));
  }

  _renderItems () {
    const { todoItems } = this.props;
    return todoItems.map((item, index) => {
      return (
        <li className="todo-item" key={index}>
          <input
            type="checkbox"
            className="item-satus"
            checked={item.completed}
            onChange={() => this.toggleCompleted(index)}
            tabIndex="-1"
          />
          <div className={ClassNames('item-description', { completed: item.completed })}>
            {item.description}
          </div>
          <span
            className="btn item-remove-btn"
            onClick={() => this.removeItem(index)}
            onKeyPress={() => this.removeItem(index)}
            role="button"
            tabIndex="-1"
          >
              &times;
          </span>
        </li>
      );
    });
  }

  render () {
    return (
      <div className="container">
        <h3 className="message">
            Checking off items is really satisfying. Give it a try.
        </h3>
        <div className="todo-app">
          <div className="add-item">
            <input
              className="add-item-input"
              ref={comp => this.addInputComp = comp}
              autoFocus
              tabIndex="2"
            />
            <span
              className="btn add-item"
              onClick={this.addItemToList}
              onKeyPress={this.addItemButtonPressed}
              role="button"
              tabIndex="3"
            >
              +
            </span>
          </div>
          {
            (() => {
              let comp;
              if (this.props.todoItems.length > 0) {
                comp = (
                  <ul className="todo-items">
                    {this.renderItems()}
                  </ul>
                );
              } else {
                  comp = (
                    <div className="no-item">
                      {NO_ITEM_MESSAGE}
                    </div>
                  );
              }
              return comp;
            })()
          }
        </div>
      </div>
    );
  }
}

TodoApp.propTypes = {
  dispatch: PropTypes.func,
  todoItems: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    completed: PropTypes.bool
  }))
};

const mapStateToProps = ({ todos }) => {
  return {
    todoItems: todos.todoItems
  };
};

export default connect(mapStateToProps)(TodoApp);
