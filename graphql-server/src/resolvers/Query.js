const tasks = (root, args, context, info) => context.db.query.tasks({}, info);
const info = () => 'This is the todo api';

export default {
  tasks,
  info
};
