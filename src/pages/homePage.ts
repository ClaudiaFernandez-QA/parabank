import { Page, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly customerLoginTitle: Locator;
    readonly usernameLabel: Locator;
    readonly usernameInput: Locator;
    readonly passwordLabel: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginInfoLink: Locator;
    readonly registerLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.customerLoginTitle = page.getByRole('heading', { name: 'Customer Login' });
        this.usernameLabel = page.getByText('Username');
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordLabel = page.getByText('Password', { exact: true })
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.getByRole('button', { name: 'Log In' });
        this.loginInfoLink = page.getByRole('link', { name: 'Forgot login info?' });
        this.registerLink = page.getByRole('link', { name: 'Register' });
    }

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

    async goToLoginInfo() {
        await this.loginInfoLink.click();
    }

    async goToRegister() {
        await this.registerLink.click();
    }

}
