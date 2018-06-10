const tasks = (root, args, context, info) => {
  return context.db.query.tasks(
    {
      where: {
        deleted: false
      }
    },
    info
  );
};

const deletedTasks = (root, args, context, info) => {
  return context.db.query.tasks(
    {
      where: {
        deleted: true
      }
    },
    info
  );
};

const info = () => 'This is the todo api';

export default {
  tasks,
  info,
  deletedTasks
};
