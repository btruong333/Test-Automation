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
        this.logoutOption = page.locator('[data-test="logout-sidebar-link"]').first();

    }

    async loginWithErrorUser() {
        //Logging in with a error user

        //Navigate to Sauce Demo
        await this.page.goto(this.sauceDemoDefaultURL);
        await this.logo.waitFor();
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
        await this.logo.waitFor();
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
        await this.logo.waitFor();
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
        await this.logo.waitFor();
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
        await this.logo.waitFor();
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
        await this.logo.waitFor();
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

    //Buttons

    //Drop-Down Menu
    readonly menuDropDown: Locator;

    //Fields

    //Options
    readonly aboutOption: Locator;
    readonly allItemsOption: Locator;
    readonly logoutOption: Locator;
    readonly resetAppState: Locator;

    constructor(page: Page) {
        this.page = page;

        //Buttons

        //Drop-Down Menu
        this.menuDropDown = page.getByRole('button', { name: 'Open Menu' }).first();

        //Fields

        //Options
        this.aboutOption = page.locator('[data-test="about-sidebar-link"]').first();
        this.allItemsOption = page.locator('[data-test="inventory-sidebar-link"]').first();
        this.logoutOption = page.locator('[data-test="logout-sidebar-link"]').first();
        this.resetAppState = page.locator('[data-test="reset-sidebar-link"]').first();

    }
}