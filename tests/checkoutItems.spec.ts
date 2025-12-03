import { test, expect } from '@playwright/test';
import { Objects, SitesAndLogins } from '../pages/source';

test.beforeEach(async ({ page }) => {
    const site = new SitesAndLogins(page);
    await site.loginWithStandardUser();
});

test.afterEach(async ({ page }) => {
    const site = new SitesAndLogins(page);
    await site.logout();
});

test('Checkout Single Item', async ({ page }) => {
    //Ensuring the user can checkout a single item
    const object = new Objects(page);
    const item1 = 'Sauce Lab Backpack';
    const firstName = 'John';
    const lastName = 'Smith';
    const zip = '12345'

    //Add Sauce Lab Backpack to the cart
    await object.addToCart(item1);

    //Click on the cart
    await object.shoppingCartLink.click(); 

    //Assert that the item appears in the cart
    await object.expectItemInCart(item1);

    //Click Checkout
    await object.checkoutButton.click();

    //Input First Name
    await object.firstNameField.fill(firstName);
    
    //Input Last Name
    await object.lastNameField.fill(lastName);

    //Input Zip Code
    await object.zipPostalCodeField.fill(zip);

    //Click Continue
    await object.continueButton.click();

    //Assert that the item appears in the overview
    await object.expectItemInCart(item1);

    //Click Finish
    await object.finishButton.click();

    //Assert the user successfully checks out item
    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();

})