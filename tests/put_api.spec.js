const { test, expect } = require('@playwright/test');

test('API Put Request Test', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data:{
        "name": "Facetious",
        "job": "leader"
    }
  })
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Facetious");
  console.log(await response.json());
});
