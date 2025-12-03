import { expect, type Locator, type Page } from '@playwright/test';

export class SitesAndLogins {
    readonly page: Page;
    //URLs
    public sauceDemoDefaultURL = 'https://www.saucedemo.com';
    public inventoryURL = 'https://www.saucedemo.com/inventory.html';

    //Logins
    public errorUser = 'error_user'; //User that experiences errors throughout the app
    public lockedOutUser = 'locked_out_user'; //User whose account is locked out
    public password = 'secret_sauce'; //Shared password across all accounts
    public performanceGlitchUser = 'performance_glitch_user'; //User that experience performance issues throughout the app
    public problemUser = 'problem_user'; //User that will experience bugs in the app
    public standardUser = 'standard_user'; //Standard user with fewer bugs than problem_user
    public visuaUser = 'visual_user'; //User that will experience visual bugs in the app

    /* Objects from the login page */

    //Buttons
    readonly loginButton: Locator;

    //Drop-Down Menu
    readonly menuDropDown: Locator;

    //Fields
    readonly passwordField: Locator;
    readonly usernameField: Locator;

    //Logo
    readonly logo: Locator;

    //Options
    readonly logoutOption: Locator;

    constructor(page: Page) {
        this.page = page;

        /* Objects from the login page */

        //Buttons
        this.loginButton = page.getByRole('button', { name: 'Login' });

        //Drop-Down Menu
        this.menuDropDown = page.getByRole('button', { name: 'Open Menu' }).first();

        //Fields
        this.passwordField = page.getByRole('textbox', { name: 'Password' }).first();
        this.usernameField = page.getByRole('textbox', { name: 'Username' }).first();

        //Logo
        this.logo = page.getByText('Swag Labs').first();

        //Options
        this.logoutOption = page.getByRole('link', { name: 'Logout', exact: true }).first();

    }

    async loginWithErrorUser() {
        //Logging in with a error user

        //Navigate to Sauce Demo
        await this.page.goto(this.sauceDemoDefaultURL);
        await expect(this.logo).toBeVisible();
        //Input a Username
        await expect(this.usernameField).toBeVisible();
        await this.usernameField.fill(this.errorUser);
        //Input a Password
        await expect(this.passwordField).toBeVisible();
        await this.passwordField.fill(this.password);
        //Click Login
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');

    }
    
    async loginWithLockedOutUser() {
        //Logging in with a locked out user

        //Navigate to Sauce Demo
        await this.page.goto(this.sauceDemoDefaultURL);
        await expect(this.logo).toBeVisible();
        //Input a Username
        await expect(this.usernameField).toBeVisible();
        await this.usernameField.fill(this.lockedOutUser);
        //Input a Password
        await expect(this.passwordField).toBeVisible();
        await this.passwordField.fill(this.password);
        //Click Login
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');

    }

    async loginWithPerformanceGlitchUser() {
        //Logging in with a performance glitch user

        //Navigate to Sauce Demo
        await this.page.goto(this.sauceDemoDefaultURL);
        await expect(this.logo).toBeVisible();
        //Input a Username
        await expect(this.usernameField).toBeVisible();
        await this.usernameField.fill(this.standardUser);
        //Input a Password
        await expect(this.passwordField).toBeVisible();
        await this.passwordField.fill(this.password);
        //Click Login
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');

    }
    
    async loginWithProblemUser() {
        //Logging in with a problem user

        //Navigate to Sauce Demo
        await this.page.goto(this.sauceDemoDefaultURL);
        await expect(this.logo).toBeVisible();
        //Input a Username
        await expect(this.usernameField).toBeVisible();
        await this.usernameField.fill(this.problemUser);
        //Input a Password
        await expect(this.passwordField).toBeVisible();
        await this.passwordField.fill(this.password);
        //Click Login
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');

    }

    async loginWithStandardUser() {
        //Logging in with a standard user

        //Navigate to Sauce Demo
        await this.page.goto(this.sauceDemoDefaultURL);
        await expect(this.logo).toBeVisible();
        //Input a Username
        await expect(this.usernameField).toBeVisible();
        await this.usernameField.fill(this.standardUser);
        //Input a Password
        await expect(this.passwordField).toBeVisible();
        await this.passwordField.fill(this.password);
        //Click Login
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');

    }

    async loginWithVisualUser() {
        //Logging in with a visual user

        //Navigate to Sauce Demo
        await this.page.goto(this.sauceDemoDefaultURL);
        await expect(this.logo).toBeVisible();
        //Input a Username
        await expect(this.usernameField).toBeVisible();
        await this.usernameField.fill(this.visuaUser);
        //Input a Password
        await expect(this.passwordField).toBeVisible();
        await this.passwordField.fill(this.password);
        //Click Login
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');

    }

    async logout() {
        //Logging out

        //Navigate back to the inventory page
        await this.page.goto(this.inventoryURL);
        //Click menu
        await expect(this.menuDropDown).toBeVisible();
        await this.menuDropDown.click();
        //Select Logout
        await expect(this.logoutOption).toBeVisible();
        await this.logoutOption.click();
        //Assert the user has logged out
        await this.page.waitForLoadState('networkidle');
        await expect(this.logo).toBeVisible();
        await expect(this.usernameField).toBeVisible();
        await expect(this.passwordField).toBeVisible();

    }
};

export class Objects {
    readonly page: Page;

    //Buttons and Links
    readonly addToCartButton: Locator;
    readonly backToProductsLink: Locator;
    readonly cancelButton: Locator;
    readonly checkoutButton: Locator;
    readonly closeMenuButton: Locator;
    readonly continueButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly finishButton: Locator;
    readonly removeButton: Locator;
    readonly shoppingCartLink: Locator;

    //Drop-Down Menu
    readonly menuDropDown: Locator;
    readonly sortDropDown: Locator;

    //Fields
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly zipPostalCodeField: Locator;

    //Labels
    readonly inventoryItemDescription: Locator;
    readonly inventoryItemName: Locator;
    readonly inventoryItemPrice: Locator;
    readonly productDescriptions: Locator;
    readonly productDetailsDescription: Locator;
    readonly productDetailsName: Locator;
    readonly productDetailsPrice: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;

    //Options
    readonly aboutOption: Locator;
    readonly allItemsOption: Locator;
    readonly nameAZSortOption: Locator;
    readonly nameZASortOption: Locator;
    readonly priceHighLowSortOption: Locator;
    readonly priceLowHighSortOption: Locator;
    readonly resetAppStateOption: Locator;

    constructor(page: Page) {
        this.page = page;

        //Buttons and Links
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' }).first();
        this.backToProductsLink = page.getByRole('button', { name: 'Back to products'}).first();
        this.cancelButton = page.getByRole('button', { name: 'Cancel' }).first();
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' }).first();
        this.closeMenuButton = page.getByRole('button', { name: 'Close Menu' }).first();
        this.continueButton = page.getByRole('button', { name: 'Continue' }).first();
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' }).first();
        this.finishButton = page.getByRole('button', { name: 'Finish' }).first();
        this.removeButton = page.getByRole('button', { name: 'Remove' }).first();
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]').first();

        //Drop-Down Menu
        this.menuDropDown = page.getByRole('button', { name: 'Open Menu' }).first();
        this.sortDropDown = page.getByRole('combobox').first();

        //Fields
        this.firstNameField = page.getByRole('textbox', { name: 'First Name' }).first();
        this.lastNameField = page.getByRole('textbox', { name: 'Last Name' }).first();
        this.zipPostalCodeField = page.getByRole('textbox', { name: 'Zip'}).first();

        //Labels
        this.inventoryItemDescription = page.locator('.inventory_item_desc');
        this.inventoryItemName = page.locator('.inventory_item_name');
        this.inventoryItemPrice = page.locator('.inventory_item_price');
        this.productDescriptions = page.locator('.inventory_item_desc');
        this.productDetailsDescription = page.locator('.inventory_details_desc');
        this.productDetailsName = page.locator('.inventory_details_name');
        this.productDetailsPrice = page.locator('.inventory_details_price');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');

        //Options
        this.aboutOption = page.getByRole('link', { name: 'About', exact: true }).first();
        this.allItemsOption = page.getByRole('link', { name: 'All Items', exact: true }).first();
        this.nameAZSortOption = page.getByRole('option', { name: 'Name (A to Z)'}).first();
        this.nameZASortOption = page.getByRole('option', { name: 'Name (Z to A)'}).first();
        this.priceHighLowSortOption = page.getByRole('option', { name: 'Price (high to low)' }).first();
        this.priceLowHighSortOption = page.getByRole('option', { name: 'Price (low to high)' }).first();
        this.resetAppStateOption = page.getByRole('link', { name: 'Reset App Store', exact: true }).first();

    }

    async selectSort(option: string) {
        //This looks at the sort drop-down
        await this.sortDropDown.selectOption(option);
    }

    async getProductDescriptions(): Promise<string[]> {
        //Grabs all product descriptions
        return await this.productDescriptions.allInnerTexts();
    }

    async getProductNames(): Promise<string[]> {
        //Grabs all product names
        return await this.productNames.allInnerTexts();
    }

    async getProductPrices(): Promise<number[]> {
        //Grabs all product prices
        const prices = await this.productPrices.allInnerTexts();
        return prices.map(p => parseFloat(p.replace('$', '')));
    }

    async addToCart(itemName: string) {
        //Locate the product container based on item name
        const product = this.page.locator('.inventory_item').filter({
            has: this.page.getByRole('heading', { name: itemName })
        });

        //Click the Add to cart button within the product block
        await product.getByRole('button', { name: 'Add to cart', exact: true }).click();
    }

    async removeFromCart(itemName: string) {
        //Locate the product container based on item name
        const product = this.page.locator('.inventory_item').filter({
            has: this.page.getByRole('heading', { name: itemName })
        });

        //Click the Remove button within the product block
        await product.getByRole('button', { name: 'Remove', exact: true }).click();
    }

    async expectItemInCart(itemName: string) {
        //Looks at all items in the cart
        const cartItem = this.page.locator('.cart_item').filter({
            has: this.page.getByRole('heading', { name: itemName })
        });

        //Assert the user sees the item in the cart
        await expect(cartItem).toBeVisible();
    }

    async expectItemNotInCart(itemName: string) {
        //Looks at all items in the cart
        const cartItem = this.page.locator('.cart_item').filter({
            has: this.page.getByRole('heading', { name: itemName })
        });

        //Assert the user sees the item in the cart
        await expect(cartItem).not.toBeVisible();
    }

}