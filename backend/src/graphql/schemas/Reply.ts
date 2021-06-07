import { objectType } from 'nexus';

export const Reply = objectType({
  name: 'Reply',
  definition(t) {
    t.model.id(),
      t.model.content(),
      t.model.user(),
      t.model.tweet(),
      t.model.tweetId(),
      t.model.reply(),
      t.model.replies(),
      t.model.createdAt(),
      t.model.updatedAt()
  }
})
