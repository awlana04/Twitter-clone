import { objectType, } from 'nexus';

export const ImageUpload = objectType({
  name: 'ImageUpload',
  definition(t) {
    t.model.id(),
      t.upload('avatar'),
      t.upload('backgroundCover'),
      t.model.profile(),
      t.model.createdAt(),
      t.model.updatedAt()
  },
});
