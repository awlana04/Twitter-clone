import { objectType, } from 'nexus';

export const AvatarUpload = objectType({
  name: 'AvatarUpload',
  definition(t) {
    t.model.id(),
      t.model.filename(),
      t.model.uri(),
      t.model.profile(),
      t.model.createdAt(),
      t.model.updatedAt()
  },
});
