import { createTestContext } from './__helpers';

const ctx = createTestContext();

it('ensures that a user is created', async () => {
  const signUp = await ctx.client.request(`
    mutation signup {
      signup("id: "1", name: "Awlana Costa", email: "cawlana040@gmail.com", password: "123456") {
        id
        name
        email
        password
      }
    }
  `)

  expect(signUp).toMatchInlineSnapshot(`
    Object {
      "signup": Object {
        "id": "1"
        "name": "Awlana Costa"
        "email": "cawlana040@gmail.com"
        "password": "123456"
      },
    }
  `)
})
