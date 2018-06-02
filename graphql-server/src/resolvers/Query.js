const feed = (root, args, context, info) => context.db.query.links({}, info);

export default {
  feed
};
