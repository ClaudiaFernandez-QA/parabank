import { Page, Locator } from '@playwright/test';

export class AccountServicesPage {

    readonly page: Page;
    readonly accountServicesTitle: Locator;
    readonly openNewAccountLink: Locator;
    readonly accountsOverviewLink: Locator;
    readonly transferFundsLink: Locator;
    readonly billPayLink: Locator;
    readonly findTransactionsLink: Locator;
    readonly updateContactInfoLink: Locator;
    readonly requestLoanLink: Locator;
    readonly logoutLink: Locator;


    constructor(page: Page) {

        this.page = page;
        this.accountServicesTitle = page.getByRole('heading', { name: 'Account Services' });
        this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account' });
        this.accountsOverviewLink = page.getByRole('link', { name: 'Accounts Overview' });
        this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' });
        this.billPayLink = page.getByRole('link', { name: 'Bill Pay' });
        this.findTransactionsLink = page.getByRole('link', { name: 'Find Transactions' });
        this.updateContactInfoLink = page.getByRole('link', { name: 'Update Contact Info' });
        this.requestLoanLink = page.getByRole('link', { name: 'Request Loan' });
        this.logoutLink = page.getByRole('link', { name: 'Log Out' });
    }

    async gotoOpenNewAccount() {
        await this.openNewAccountLink.click();
    }

    async gotoAccountsOverview() {
        await this.accountsOverviewLink.click();
    }

    async gotoTransferFunds() {
        await this.transferFundsLink.click();
    }

    async gotoBillPay() {
        await this.billPayLink.click();
    }

    async gotoFindTransactions() {
        await this.findTransactionsLink.click();
    }

    async gotoUpdateContactInfo() {
        await this.updateContactInfoLink.click();
    }

    async gotoRequestLoan() {
        await this.requestLoanLink.click();
    }

    async logout() {
        await this.logoutLink.click();
    }
}