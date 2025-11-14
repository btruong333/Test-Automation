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

test('Add, verify, and remove item from item page', async ({ page }) => {
    //Ensuring the user can add an item to their cart, verify that it's in the cart, and remove it from the item page
    const object = new Objects(page);
    const item1 = 'Sauce Lab Backpack';

    //Add Sauce Lab Backpack to the cart
    await object.addToCart(item1);

    //Click on the cart
    await object.shoppingCartLink.click(); 

    //Assert that the item appears in the cart
    await object.expectItemInCart(item1);

    //Click Continue Shopping
    await object.continueShoppingButton.click();

    //Click Remove
    await object.removeFromCart(item1);

    //Click on the cart
    await object.shoppingCartLink.click();

    //Assert the item is not in the cart
    await object.expectItemNotInCart(item1);

});

test('Add, verify, and remove item from item cart', async ({ page }) => {
    //Ensuring the user can add an item to their cart, verify that it's in the cart, and remove it from the cart
    const object = new Objects(page);
    const item1 = 'Sauce Lab Backpack';

    //Add Sauce Lab Backpack to the cart
    await object.addToCart(item1);

    //Click on the cart
    await object.shoppingCartLink.click(); 

    //Assert that the item appears in the cart
    await object.expectItemInCart(item1);

    //Click Remove
    await object.removeFromCart(item1);

    //Assert the item is not in the cart
    await object.expectItemNotInCart(item1);

});