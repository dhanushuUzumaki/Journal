import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
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
    if (this.props.tasksQuery && this.props.tasksQuery.loading) {
      return <div>Loading</div>;
    }
    if (this.props.tasksQuery && this.props.tasksQuery.error) {
      return <div>Error</div>;
    }
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
            const reduxTasks = this.props.tasks.map((task, i) => (
              <TodoItem
                item={task}
                index={i}
                key={`${i - 0}`}
                onDelete={deleteTask}
              />
            ));
            const apolloTasks = this.props.tasksQuery.tasks.map((task, i) => (
              <TodoItem
                item={task.task}
                index={i}
                key={`${i - 1}`}
                onDelete={deleteTask}
              />
            ));
            return reduxTasks.concat(apolloTasks);
          })()}
        </ul>
      </div>
    );
  }
}

Todo.propTypes = {
  dispatch: PropTypes.func,
  tasks: PropTypes.array,
  tasksQuery: PropTypes.object
};

const mapStateToProps = ({ todos }) => {
  return {
    tasks: todos.todoItems
  };
};

export const TASKS_QUERY = gql`
  query FeedQuery {
    tasks {
      task
      id
      completed
    }
  }
`;

export default _.flow(
  connect(mapStateToProps),
  graphql(TASKS_QUERY, { name: 'tasksQuery' })
)(Todo);
