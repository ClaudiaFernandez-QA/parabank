import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/homePage';
import { AccountServicesPage } from '../../src/pages/accountServicesPage';
import { OpenNewAccountPage } from '../../src/pages/openNewAccountPage';
import { generateNewUser } from '../../src/utils/generateUser';
import { RegisterPage } from '../../src/pages/registerPage';

test.describe('Funcionalidad: Open New Account', () => {
    let homePage: HomePage;
    let registerPage: RegisterPage;
    let accountServicesPage: AccountServicesPage;
    let openNewAccountPage: OpenNewAccountPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        registerPage = new RegisterPage(page);
        accountServicesPage = new AccountServicesPage(page);
        openNewAccountPage = new OpenNewAccountPage(page);

        // Registro previo de usuario para poder acceder a Open New Account
        await homePage.goto();
        await homePage.goToRegister();
        const newUser = generateNewUser();
        await registerPage.registerUser(newUser);

        // Acceder a Open New Account
        await accountServicesPage.gotoOpenNewAccount();
    });

    test('Validar que la página de Open New Account carga correctamente @ui', async ({ page }) => {
        await expect(openNewAccountPage.openNewAccountTitle).toBeVisible();
        await expect(openNewAccountPage.accountTypeDropdown).toBeVisible();
        await expect(openNewAccountPage.minimumDepositInfo).toBeVisible();
        await expect(openNewAccountPage.sourceAccountDropdown).toBeVisible();
        await expect(openNewAccountPage.openAccountButton).toBeVisible();
    });
});
