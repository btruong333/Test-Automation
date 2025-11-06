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

test('Sorting Name by A to Z', async ({ page }) => {
    //Ensuring the user can sort the products by name from A to Z properly
    const site = new SitesAndLogins(page); 
    const object = new Objects(page);
    //Navigate to the All Items page
    await page.goto(site.inventoryURL);
    //Select Name (A to Z) from the sort drop-down
    await object.selectSort('az');
    //Grab all product titles
    const productNames = await object.getProductNames();
    const sortedNames = [...productNames].sort((a,b) => a.localeCompare(b));
    //Assert that the products are sorted properly
    await expect(productNames).toEqual(sortedNames);
});

test('Sorting Name by Z to A', async ({ page }) => {
    //Ensuring the user can sort the products by name from Z to A properly
    const site = new SitesAndLogins(page);
    const object = new Objects(page); 
    //Navigate to the All Items page
    await page.goto(site.inventoryURL);
    //Select Name (Z to A) from the sort drop-down
    await object.selectSort('za');
    //Grab all product titles
    const productNames = await object.getProductNames();
    const sortedNames = [...productNames].sort((a,b) => b.localeCompare(a));
    //Assert that the products are sorted properly
    await expect(productNames).toEqual(sortedNames);
});

test('Sorting Price from Low to High', async ({ page }) => {
    //Ensuring the user can sort the products by price from low to high properly
    const site = new SitesAndLogins(page); 
    const object = new Objects(page);
    //Navigate to the All Items page
    await page.goto(site.inventoryURL);
    //Select Price (Low to High) from the sort drop-down
    await object.selectSort('lohi');
    //Grab all product titles
    const productPrices = await object.getProductPrices();
    const sortedPrices = [...productPrices].sort((a,b) => a - b);
    //Assert that the products are sorted properly
    await expect(productPrices).toEqual(sortedPrices);
});

test('Sorting Price from High to Low', async ({ page }) => {
    //Ensuring the user can sort the products by price from high to low properly
    const site = new SitesAndLogins(page); 
    const object = new Objects(page);
    //Navigate to the All Items page
    await page.goto(site.inventoryURL);
    //Select Price (High to Low) from the sort drop-down
    await object.selectSort('hilo');
    //Grab all product titles
    const productPrices = await object.getProductPrices();
    const sortedPrices = [...productPrices].sort((a,b) => b - a);
    //Assert that the products are sorted properly
    await expect(productPrices).toEqual(sortedPrices);
});