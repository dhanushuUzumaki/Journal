import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withApollo, graphql } from 'react-apollo';
import TodoItem from './TodoItem';
import * as gqlOperations from '../../graphqlOperations/Todo';

const updateStoreWithDeletedTask = (store, deletedTask) => {
  const data = store.readQuery({ query: gqlOperations.DELETED_TASKS_QUERY });
  const deletedTaskIndex = data.deletedTasks.findIndex(
    t => t.id === deletedTask
  );
  data.deletedTasks.splice(deletedTaskIndex, 1);
  store.writeQuery({ query: gqlOperations.DELETED_TASKS_QUERY, data });
};

class Trash extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTask = id => this._deleteTask(id);
    this.restoreTask = id => this._restoreTask(id);
  }

  async _deleteTask(id) {
    await this.props.client.mutate({
      mutation: gqlOperations.DELETE_TASK_PERMENANTLY,
      variables: { id },
      update: (store, { data: { deleteTaskPermanently } }) => {
        updateStoreWithDeletedTask(store, deleteTaskPermanently);
      }
    });
  }

  async _restoreTask(id) {
    await this.props.client.mutate({
      mutation: gqlOperations.RESTORE_TASK,
      variables: { id },
      update: (store, { data: { restoreTask } }) => {
        updateStoreWithDeletedTask(store, restoreTask.id);
      },
      refetchQueries: [
        {
          query: gqlOperations.TASKS_QUERY
        }
      ]
    });
  }

  render() {
    const { deletedTasksQuery } = this.props;
    if (deletedTasksQuery && deletedTasksQuery.loading) {
      return <div>Loading</div>;
    }
    if (deletedTasksQuery && deletedTasksQuery.error) {
      return <div>Error</div>;
    }
    return (
      <div className="todoHolder">
        {(() => {
          if (deletedTasksQuery.deletedTasks.length > 0) {
            return (
              <ul className="todo-items">
                {(() => {
                  return deletedTasksQuery.deletedTasks.map((task, i) => (
                    <TodoItem
                      item={task.task}
                      id={task.id}
                      key={`${i}`}
                      onDelete={this.deleteTask}
                      trash
                      completed={task.completed}
                      actionHandler={this.restoreTask}
                    />
                  ));
                })()}
              </ul>
            );
          }
          return 'Trash is Empty';
        })()}
      </div>
    );
  }
}

Trash.propTypes = {
  deletedTasksQuery: PropTypes.object,
  client: PropTypes.object
};

export default _.flow(
  withApollo,
  graphql(gqlOperations.DELETED_TASKS_QUERY, { name: 'deletedTasksQuery' })
)(Trash);
