const addTask = (root, args, context, info) => {
  return context.db.mutation.createTask(
    {
      data: {
        task: args.task,
        completed: false,
        deleted: false
      }
    },
    info
  );
};

async function deleteTask(root, args, context) {
  const task = await context.db.mutation.updateTask(
    {
      data: {
        deleted: true
      },
      where: {
        id: args.id
      }
    },
    '{ id }'
  );
  if (task) {
    return task.id;
  }
}

async function deleteTaskPermanently(root, args, context) {
  const task = await context.db.mutation.deleteTask(
    {
      where: {
        id: args.id
      }
    },
    '{id}'
  );
  if (task) {
    return task.id;
  }
}

const restoreTask = (root, args, context, info) => {
  return context.db.mutation.updateTask(
    {
      data: {
        deleted: false
      },
      where: {
        id: args.id
      }
    },
    info
  );
};

export default {
  addTask,
  deleteTask,
  restoreTask,
  deleteTaskPermanently
};
