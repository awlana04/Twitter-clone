import { PrismaClient } from '@prisma/client';
// import { createTestContext } from '../__helpers';

import createUser from './CreateUser';

// const prisma = createTestContext();
const prisma = new PrismaClient();

afterAll(async (done) => {
  // await prisma.context.$disconnect;
  await prisma.$disconnect;
  done();
});

describe('createUser - unit', () => {
  it('creates a new user correctly', async () => {
    const email = 'johndoe_email@gmail.com';
    const password = 'johndoe123';

    // await createUser({ email, password });

    await createUser({ prisma, email, password });

    // const [savedUser] = await prisma.context.user.findMany({
    //   where: {
    //     email,
    //     password
    //   },
    //   take: 1
    // });

    const [savedUser] = await prisma.user.findMany({
      where: {
        email,
        password
      },
      take: 1
    });

    expect(savedUser.email).toBe(email);
  })

  it('fails if tries to create records with the same user email twice', async () => {
    const email = 'johndoe_email@gmail.com';
    const password = 'johndoe123';

    // await createUser({ email, password });

    await createUser({ prisma, email, password });

    // const [savedUser] = await prisma.context.user.findMany({
    //   where: {
    //     email
    //   },
    //   take: 1
    // });

    const [savedUser] = await prisma.user.findMany({
      where: {
        email,
      },
      take: 1
    });

    expect(savedUser.email).toBe(email);

    //   await expect(() => createUser({ email, password }))
    //     .rejects
    //     .toThrow("Unique constraint failed on the fields: (`email`)");
    // })
    await expect(() => createUser({ prisma, email, password })).rejects.toThrow(
      "Unique constraint failed on the fields: (`email`)"
    );
  })
});
