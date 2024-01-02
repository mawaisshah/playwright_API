const { test, expect } = require('@playwright/test');

test('API Put Request - Update User', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data:{
        "name": "Facetious",
        "job": "leader"
    }
  })
  expect(response.status()).toBe(200);
  const responseBody = JSON.parse(await response.text());
  expect(responseBody.name).toContain("Facetious");
  expect(responseBody.job).toContain("leader");
  expect(responseBody.updatedAt).toBeTruthy();
  // console.log(await response.json());
});
