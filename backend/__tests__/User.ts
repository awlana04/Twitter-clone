import { createTestContext } from './__helpers';

const ctx = createTestContext();

it('ensures that a user is created', async () => {
  // Create a new user
  const signUp = await ctx.client.request(`
    mutation {
      signup(avatar: "http://awlana.avatar", name: "Awlana Costa", email: "cawlana040@gmail.com", password: "123456") {
        id
        avatar
        name
        email
        password
      }
    }
  `)

  expect(signUp).toMatchInlineSnapshot(`
    Object {
      "signup": Object {
        "id": 1,
        "avatar": "http://awlana.avatar",
        "name": "Awlana Costa",
        "email": "cawlana040@gmail.com",
        "password": "123456"
      },
    }
  `)

  const persistedData = await ctx.context.user.findMany();

  expect(persistedData).toMatchInlineSnapshot(`
    Array [
      Object {
        "id": 1,
        "avatar": "http://awlana.avatar",
        "name": "Awlana Costa",
        "email": "cawlana040@gmail.com",
        "password": "123456"
      },
    ]
  `)
})
