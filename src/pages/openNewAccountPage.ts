import { Page, Locator } from '@playwright/test';

export class OpenNewAccountPage {
    readonly page: Page;
    readonly openNewAccountTitle: Locator;
    readonly accountTypeLabe: Locator;
    readonly accountTypeDropdown: Locator;
    readonly minimumDepositInfo: Locator;
    readonly sourceAccountDropdown: Locator;
    readonly openAccountButton: Locator;
    readonly accountOpenedTitle: Locator;
    readonly newAccountId: Locator;

    constructor(page: Page) {
        this.page = page;
        this.openNewAccountTitle = page.getByRole('heading', { name: 'Open New Account' })
        this.accountTypeLabe = page.getByText('What type of Account would');
        this.accountTypeDropdown = page.locator('#type');
        this.minimumDepositInfo = page.getByText('A minimum of $100.00 must be deposited into this account');
        this.sourceAccountDropdown = page.locator('#fromAccountId');
        this.openAccountButton = page.getByRole('button', { name: 'Open New Account' });
        this.accountOpenedTitle = page.getByRole('heading', { name: 'Account Opened!' });
        this.newAccountId = page.locator('#newAccountId');
    }

    async selectAccountType(type: string) {
        await this.accountTypeDropdown.selectOption(type);
    }

    async submitNewAccount() {
        await this.openAccountButton.click();
    }

    async getNewAccountId(): Promise<string> {
        return this.newAccountId.innerText();
    }
}
