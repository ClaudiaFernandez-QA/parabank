import { Page, Locator } from '@playwright/test';
import { User } from '../data/user';

export class RegisterPage {
    readonly page: Page;
    readonly signupTitle: Locator;
    readonly signupText: Locator;
    readonly firstNameLabel: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameLabel: Locator;
    readonly lastNameInput: Locator;
    readonly addressLabel: Locator;
    readonly addressInput: Locator;
    readonly cityLabel: Locator;
    readonly cityInput: Locator;
    readonly stateLabel: Locator;
    readonly stateInput: Locator;
    readonly zipCodeLabel: Locator;
    readonly zipCodeInput: Locator;
    readonly phoneLabel: Locator;
    readonly phoneInput: Locator;
    readonly ssnLabel: Locator;
    readonly ssnInput: Locator;
    readonly usernameLabel: Locator;
    readonly usernameInput: Locator;
    readonly passwordLabel: Locator;
    readonly passwordInput: Locator;
    readonly confirmLabel: Locator;
    readonly confirmInput: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupTitle = page.getByRole('heading', { name: 'Signing up is easy!' });
        this.signupText = page.getByText('If you have an account with');
        this.firstNameLabel = page.getByText('First Name:');
        this.firstNameInput = page.locator('[id="customer\\.firstName"]');
        this.lastNameLabel = page.getByText('Last Name:');
        this.lastNameInput = page.locator('[id="customer\\.lastName"]');
        this.addressLabel = page.getByText('Address:');
        this.addressInput = page.locator('[id="customer\\.address\\.street"]');
        this.cityLabel = page.getByText('City:');
        this.cityInput = page.locator('[id="customer\\.address\\.city"]');
        this.stateLabel = page.getByText('State:');
        this.stateInput = page.locator('[id="customer\\.address\\.state"]');
        this.zipCodeLabel = page.getByText('Zip Code:');
        this.zipCodeInput = page.locator('[id="customer\\.address\\.zipCode"]');
        this.phoneLabel = page.getByText('Phone #:');
        this.phoneInput = page.locator('[id="customer\\.phoneNumber"]');
        this.ssnLabel = page.getByText('SSN:');
        this.ssnInput = page.locator('[id="customer\\.ssn"]');
        this.usernameLabel = page.getByText('Username:');
        this.usernameInput = page.locator('[id="customer\\.username"]');
        this.passwordLabel = page.getByText('Password:');
        this.passwordInput = page.locator('[id="customer\\.password"]');
        this.confirmLabel = page.getByText('Confirm:');
        this.confirmInput = page.locator('#repeatedPassword');
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await this.page.getByRole('link', { name: 'Register' }).click();
    }

    async registerUser(user: User) {

        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.addressInput.fill(user.address);
        await this.cityInput.fill(user.city);
        await this.stateInput.fill(user.state);
        await this.zipCodeInput.fill(user.zipCode);
        await this.phoneInput.fill(user.phone);
        await this.ssnInput.fill(user.ssn);
        await this.usernameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
        await this.confirmInput.fill(user.password); // Confirmación usa la misma contraseña
        await this.registerButton.click();
    }


}