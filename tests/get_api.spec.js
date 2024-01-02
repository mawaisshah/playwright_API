const { test, expect } = require('@playwright/test');

test('API Get Request - Assert Response Status', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2')
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Lindsay");
  const responseBody = JSON.parse(await response.text())
  console.log(responseBody)
  // console.log(await response.json());
});
test('API Get Request - Asseert User Data', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2')
  const responseBody = JSON.parse(await response.text())

  expect(responseBody.data.id).toBe(2);
  expect(responseBody.data.email).toBeTruthy();
  expect(responseBody.data.first_name).toContain("Janet");
  expect(responseBody.data.last_name).toContain("Weaver");

});