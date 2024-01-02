const { test, expect } = require('@playwright/test');

test('API Post Request - Create New User', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data:{
        "name": "Aash",
        "job": "leader"
    }
  })
  const responseBody = JSON.parse(await response.text());
  // console.log(responseBody);

  expect(response.status()).toBe(201);
  expect(responseBody.name).toContain("Aash");
  expect(responseBody.job).toContain("leader");
  expect(responseBody.id).toBeTruthy();
  expect(responseBody.createdAt).toBeTruthy();
});
test('API Post Request - Login Successful', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/login', {
    data:{
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
  })
  const responseBody = JSON.parse(await response.text());
  // console.log(responseBody);

  expect(response.status()).toBe(200);
  expect(responseBody.token).toBeTruthy();
});
test('API Post Request - Login Failed', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/login', {
    data:{
        "email": "eve.holt@reqres.in",
    }
  })
  const responseBody = JSON.parse(await response.text());
  // console.log(responseBody);

  expect(response.status()).toBe(400);
  expect(responseBody.error).toContain("Missing password");
});