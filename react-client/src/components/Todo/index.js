import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import _ from 'lodash';
import { withApollo, graphql } from 'react-apollo';
import Input from '../Input';
import TodoItem from './TodoItem';
// import * as actions from '../../actions/actions';
import * as gqlOperations from '../../graphqlOperations/Todo';

const updateStoreWithNewTask = (store, addedTask) => {
  const data = store.readQuery({ query: gqlOperations.TASKS_QUERY });
  data.tasks.push(addedTask);
  store.writeQuery({ query: gqlOperations.TASKS_QUERY, data });
};

const updateStoreWithDeletedTask = (store, deletedTask) => {
  const data = store.readQuery({ query: gqlOperations.TASKS_QUERY });
  const deletedTaskIndex = data.tasks.findIndex(t => t.id === deletedTask);
  data.tasks.splice(deletedTaskIndex, 1);
  store.writeQuery({ query: gqlOperations.TASKS_QUERY, data });
};

class Todo extends React.Component {
  addTask = async task => {
    if (task.length > 0) {
      await this.props.client.mutate({
        mutation: gqlOperations.ADD_TASK,
        variables: { task },
        update: (store, { data: { addTask } }) => {
          updateStoreWithNewTask(store, addTask);
        }
      });
    }
  };

  deleteTask = async id => {
    await this.props.client.mutate({
      mutation: gqlOperations.DELETE_TASK,
      variables: { id },
      update: (store, { data: { deleteTask } }) => {
        updateStoreWithDeletedTask(store, deleteTask);
      }
    });
  };

  render() {
    const { addTask, deleteTask } = this;
    const { tasksQuery } = this.props;
    if (tasksQuery && tasksQuery.loading) {
      return <div>Loading</div>;
    }
    if (tasksQuery && tasksQuery.error) {
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
            return tasksQuery.tasks.map((task, i) => (
              <TodoItem
                item={task.task}
                id={task.id}
                key={`${i}`}
                onDelete={deleteTask}
              />
            ));
          })()}
        </ul>
      </div>
    );
  }
}

Todo.propTypes = {
  dispatch: PropTypes.func,
  tasksQuery: PropTypes.object,
  client: PropTypes.object
};

/**
const mapStateToProps = ({ todos }) => {
  return {
    tasks: todos.todoItems
  };
};
*/

/** Use this pattern when you want to get data from both apollo store and redux store
export default _.flow(
  connect(mapStateToProps),
  graphql(TASKS_QUERY, { name: 'tasksQuery' })
)(Todo);
*/

export default _.flow(
  withApollo,
  graphql(gqlOperations.TASKS_QUERY, { name: 'tasksQuery' })
)(Todo);
