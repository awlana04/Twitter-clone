import { PrismaClient } from '@prisma/client';

// import { createTestContext } from '../__helpers';

export interface CreateUserParams {
  prisma: PrismaClient;
  email: string;
  password: string;
}

// const prisma = createTestContext();

// const createUser = async ({ email, password }: CreateUserParams) => {
//   return await prisma.context.user.create({
//     data: {
//       email,
//       password
//     }
//   });
// }

const createUser = async ({ prisma, email, password }: CreateUserParams) => {
  return await prisma.user.create({
    data: {
      email,
      password
    }
  });
}

export default createUser;
