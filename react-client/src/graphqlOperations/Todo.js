import gql from 'graphql-tag';

export const TASKS_QUERY = gql`
  query FeedQuery {
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
