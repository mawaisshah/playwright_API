const { test, expect } = require('@playwright/test');

test('API Delete Request Test', async ({ request }) => {
  const response = await request.delete('https://reqres.in/api/users/2')
  expect(response.status()).toBe(204);
  
});
