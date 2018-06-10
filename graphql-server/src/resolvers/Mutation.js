const add = (root, args, context, info) => {
  return context.db.mutation.createTask(
    {
      data: {
        task: args.task
      }
    },
    info
  );
};

export default {
  add
};
