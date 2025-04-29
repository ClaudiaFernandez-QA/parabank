import { test, expect } from '@playwright/test';
import { AccountServicesPage } from '../../src/pages/accountServicesPage';
import { HomePage } from '../../src/pages/homePage';
import { LoginPage } from '../../src/pages/loginPage';
import { generateNewUser } from '../../src/utils/generateUser';
import { RegisterPage } from '../../src/pages/registerPage';

test.describe('Funcionalidad: Account Services', () => {
    let accountServicesPage: AccountServicesPage;
    let homePage: HomePage;
    let loginPage: LoginPage;
    let registerPage: RegisterPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        registerPage = new RegisterPage(page);
        accountServicesPage = new AccountServicesPage(page);
        loginPage = new LoginPage(page);

        // Registro previo de usuario
        await homePage.goto();
        await homePage.goToRegister();
        const newUserData = generateNewUser();
        await registerPage.registerUser(newUserData);
    });

    test('Validar elementos principales de la sección Account Services @ui', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Account Services' })).toBeVisible();
        await expect(accountServicesPage.openNewAccountLink).toBeVisible();
        await expect(accountServicesPage.accountsOverviewLink).toBeVisible();
        await expect(accountServicesPage.transferFundsLink).toBeVisible();
        await expect(accountServicesPage.billPayLink).toBeVisible();
        await expect(accountServicesPage.findTransactionsLink).toBeVisible();
        await expect(accountServicesPage.updateContactInfoLink).toBeVisible();
        await expect(accountServicesPage.requestLoanLink).toBeVisible();
        await expect(accountServicesPage.logoutLink).toBeVisible();
    });

    test('Permitir hacer logout exitosamente @functional', async ({ page }) => {
        await accountServicesPage.logout();
        await expect(page).toHaveURL(/index\.htm/i);
        await expect(loginPage.usernameInput).toBeVisible();
    });

    test('Validar navegación de los links de Account Services @functional', async ({ page }) => {
        await test.step('Validar Open New Account', async () => {
            await accountServicesPage.gotoOpenNewAccount();
            await expect.soft(page).toHaveURL(/openaccount\.htm/i);
            await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
        });

        await test.step('Validar Accounts Overview', async () => {
            await accountServicesPage.gotoAccountsOverview();
            await expect.soft(page).toHaveURL(/overview\.htm/i);
            await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
        });

        await test.step('Validar Transfer Funds', async () => {
            await accountServicesPage.gotoTransferFunds();
            await expect.soft(page).toHaveURL(/transfer\.htm/i);
            await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
        });

        await test.step('Validar Bill Pay', async () => {
            await accountServicesPage.gotoBillPay();
            await expect.soft(page).toHaveURL(/billpay\.htm/i);
            await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
        });

        await test.step('Validar Find Transactions', async () => {
            await accountServicesPage.gotoFindTransactions();
            await expect.soft(page).toHaveURL(/findtrans\.htm/i);
            await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
        });

        await test.step('Validar Update Contact Info', async () => {
            await accountServicesPage.gotoUpdateContactInfo();
            await expect.soft(page).toHaveURL(/updateprofile\.htm/i);
            await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
        });

        await test.step('Validar Request Loan', async () => {
            await accountServicesPage.gotoRequestLoan();
            await expect.soft(page).toHaveURL(/requestloan\.htm/i);
        });
    });


});
