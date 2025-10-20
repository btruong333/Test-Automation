import { test, expect } from '@playwright/test';

test('Logging Into SauceDemo', async ({ page }) => {
  //Load up SauceDemo
  await page.goto('https://www.saucedemo.com/');
  //Assert that the user sees site name
  await expect(page.getByText('Swag Labs', {exact: true}).first()).toBeVisible();
  //Assert the Username field appears
  await expect(page.getByRole('textbox', { name: 'Username' }).first()).toBeVisible();
  //Assert the Passworld field appears
  await expect(page.getByRole('textbox', { name: 'Password' }).first()).toBeVisible();
  //Assert the Login button appears
  await expect(page.getByRole('button', { name: 'Login' }).first()).toBeVisible();
  //Input a username
  await page.getByRole('textbox', { name: 'Username' }).first().fill('standard_user');
  //Input a password
  await page.getByRole('textbox', { name: 'Password' }).first().fill('secret_sauce');
  //Click Login
  await page.getByRole('button', { name: 'Login' }).first().click();
  //Assert the page loads up and the user sees the header
  await expect(page.getByText('Products', { exact: true }).first());

});
