const { test, expect } = require('@playwright/test');

test('API Post Request Test', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data:{
        "name": "Aash",
        "job": "leader"
    }
  })
  expect(response.status()).toBe(201);
  const text = await response.text();
  expect(text).toContain("Aash");
  console.log(await response.json());
});
