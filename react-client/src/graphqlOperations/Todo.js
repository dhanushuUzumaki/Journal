import gql from 'graphql-tag';

export const TASKS_QUERY = gql`
  query tasksQuery {
    tasks {
      task
      id
      completed
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTaskMutation($task: String!) {
    addTask(task: $task) {
      id
      task
      completed
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTaskMutation($id: ID!) {
    deleteTask(id: $id)
  }
`;

export const DELETED_TASKS_QUERY = gql`
  query deletedTasksQuery {
    deletedTasks {
      task
      id
      completed
    }
  }
`;

export const DELETE_TASK_PERMENANTLY = gql`
  mutation permenantlyDeleteTaskMutation($id: ID!) {
    deleteTaskPermanently(id: $id)
  }
`;

export const UPDATE_TASK_STATUS = gql`
  mutation updateTaskStatus($id: ID!, $completed: Boolean!) {
    updateTaskStatus(id: $id, completed: $completed) {
      id
      completed
    }
  }
`;

export const RESTORE_TASK = gql`
  mutation restoreTaskMutation($id: ID!) {
    restoreTask(id: $id) {
      id
    }
  }
`;
