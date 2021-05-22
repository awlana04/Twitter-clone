import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id(),
      t.model.email(),
      t.model.profile(),
      t.model.tweets({ pagination: false }),
      t.model.likedTweets(),
      t.model.createdAt(),
      t.model.updatedAt()
  },
})
