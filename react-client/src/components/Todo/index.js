import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../Input';
import TodoItem from './TodoItem';
import * as actions from '../../actions/actions';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = task => this._addTask(task);
    this.deleteTask = index => this._deleteTask(index);
  }

  _addTask(task) {
    if (task.length > 0) {
      this.props.dispatch(actions.addItem(task));
    }
  }

  _deleteTask(index) {
    this.props.dispatch(actions.removeItem(index));
  }

  render() {
    const { addTask, deleteTask } = this;
    return (
      <div className="todoHolder">
        <Input
          label="Task"
          name="todo"
          onBlur={addTask}
          handleEnter={addTask}
          resetOnBlur
          resetOnEnter
        />
        <ul className="todo-items">
          {(() => {
            return this.props.tasks.map((task, i) => (
              <TodoItem item={task} key={i} index={i} onDelete={deleteTask} />
            ));
          })()}
        </ul>
      </div>
    );
  }
}

Todo.propTypes = {
  dispatch: PropTypes.func,
  tasks: PropTypes.array
};

const mapStateToProps = ({ todos }) => {
  return {
    tasks: todos.todoItems
  };
};

export default connect(mapStateToProps)(Todo);
