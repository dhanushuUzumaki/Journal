const post = (root, args, context, info) => {
  return context.db.mutation.createLink(
    {
      data: {
        url: args.url,
        description: args.description
      }
    },
    info
  );
};

export default {
  post
};
