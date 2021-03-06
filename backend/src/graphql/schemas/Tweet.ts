import { objectType } from 'nexus';

export const Tweet = objectType({
  name: 'Tweet',
  definition(t) {
    t.model.id(),
      t.model.content(),
      t.model.likes(),
      t.model.replies(),
      t.model.author(),
      t.model.createdAt(),
      t.model.updatedAt()
  }
})
