import { test, expect } from '@playwright/test';
import { SitesAndLogins } from '../pages/source';

test('Login with Valid Username and Password', async ({ page }) => {
  const site = new SitesAndLogins(page);
  //Ensuring the user can log in with a valid username and password without issue
  
  //Login
  await site.loginWithStandardUser();
  //Assert the landing page loads up
  await expect(site.logo).toBeVisible();
  //Logout
  await site.logout();

});

test('Valid Username Blank Password', async ({ page }) => {
  const site = new SitesAndLogins(page);
  //Ensuring the user cannot log in with a valid username and blank password
  
  //Navigate to Sauce Demo
  await page.goto(site.sauceDemoDefaultURL);
  await expect(site.logo).toBeVisible();
  //Input a valid Username
  await site.usernameField.fill(site.standardUser);
  //Click Login
  await site.loginButton.click();
  //Assert that the user is not logged in
  await expect(site.usernameField).toBeVisible();
  await expect(site.passwordField).toBeVisible();
  await expect(site.loginButton).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.getByText('Password is required')).toBeVisible();

});

test('Valid Username Invalid Password', async ({ page }) => {
  const site = new SitesAndLogins(page);
  //Ensuring the user cannot log in with a valid username and invalid password
  
  //Navigate to Sauce Demo
  await page.goto(site.sauceDemoDefaultURL);
  await expect(site.logo).toBeVisible();
  //Input a valid Username
  await site.usernameField.fill(site.standardUser);
  //Input an invalid password
  await site.passwordField.fill('invalid password');
  //Click Login
  await site.loginButton.click();
  //Assert that the user is not logged in
  await expect(site.usernameField).toBeVisible();
  await expect(site.passwordField).toBeVisible();
  await expect(site.loginButton).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.getByText('Username and password do not match any user in this service')).toBeVisible();

});

test('Blank Username Valid Password', async ({ page }) => {
  const site = new SitesAndLogins(page);
  //Ensuring the user cannot log in with a blank username and valid password
  
  //Navigate to Sauce Demo
  await page.goto(site.sauceDemoDefaultURL);
  await expect(site.logo).toBeVisible();
  //Input a valid Password
  await site.passwordField.fill(site.password);
  //Click Login
  await site.loginButton.click();
  //Assert that the user is not logged in
  await expect(site.usernameField).toBeVisible();
  await expect(site.passwordField).toBeVisible();
  await expect(site.loginButton).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.getByText('Username is required')).toBeVisible();

});

test('Invalid Username Valid Password', async ({ page }) => {
  const site = new SitesAndLogins(page);
  //Ensuring the user cannot log in with an invalid username and valid password
  
  //Navigate to Sauce Demo
  await page.goto(site.sauceDemoDefaultURL);
  await expect(site.logo).toBeVisible();
  //Input a valid Username
  await site.usernameField.fill('invalid_user');
  //Input an invalid password
  await site.passwordField.fill(site.password);
  //Click Login
  await site.loginButton.click();
  //Assert that the user is not logged in
  await expect(site.usernameField).toBeVisible();
  await expect(site.passwordField).toBeVisible();
  await expect(site.loginButton).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.getByText('Username and password do not match any user in this service')).toBeVisible();

});

test('Login with Locked Out User', async ({ page }) => {
  const site = new SitesAndLogins(page);
  //Ensuring the user cannot log in with a logged out account

  //Login
  await site.loginWithLockedOutUser();
  //Assert that the user is not logged in
  await expect(site.usernameField).toBeVisible();
  await expect(site.passwordField).toBeVisible();
  await expect(site.loginButton).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.getByText('Sorry, this user has been locked out')).toBeVisible();
  
});