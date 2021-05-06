import { objectType, } from 'nexus';

export const AvatarUpload = objectType({
  name: 'AvatarUpload',
  definition(t) {
    t.model.id(),
      t.model.filename(),
      t.model.mimetype(),
      t.model.encoding(),
      // t.upload('avatar'),
      t.model.user(),
      t.model.createdAt(),
      t.model.updatedAt()
  },
});
