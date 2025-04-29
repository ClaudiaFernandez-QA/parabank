import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/homePage';
import { RegisterPage } from '../../src/pages/registerPage';
import { AccountServicesPage } from '../../src/pages/accountServicesPage';
import { generateNewUser } from '../../src/utils/generateUser';
import { OpenNewAccountPage } from '../../src/pages/openNewAccountPage';

test.describe('E2E: Registro de usuario y apertura de nueva cuenta', () => {
    let homePage: HomePage;
    let registerPage: RegisterPage;
    let accountServicesPage: AccountServicesPage;
    let openNewAccountPage: OpenNewAccountPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        registerPage = new RegisterPage(page);
        accountServicesPage = new AccountServicesPage(page);
        openNewAccountPage = new OpenNewAccountPage(page);

        await homePage.goto();
        await homePage.goToRegister();
    });

    test('Registrar un usuario y abrir una nueva cuenta bancaria @e2e', async ({ page }) => {

        await test.step('Registro del usuario exitoso', async () => {
            const newUser = generateNewUser();
            await registerPage.registerUser(newUser);

            await expect(page).toHaveTitle('ParaBank | Customer Created');
            await expect(page.getByText('Your account was created successfully. You are now logged in.')).toBeVisible();

        })

        await test.step('Se acceder correctamente a "Open New Account"', async () => {
            await accountServicesPage.gotoOpenNewAccount();
            await expect(page).toHaveURL(/openaccount\.htm/i);
        })

        await test.step('Se crea una nueva cuenta', async () => {

            await expect(openNewAccountPage.accountTypeDropdown).toBeVisible();
            await openNewAccountPage.selectAccountType('1'); // 1 = Savings
            await openNewAccountPage.openAccountButton.click();
        })

        await test.step('La creación de la cuenta fue exitosa', async () => {
            await expect(openNewAccountPage.accountOpenedTitle).toBeVisible();
            const newAccountId = await openNewAccountPage.getNewAccountId();
            console.log('ID cuenta creada:', newAccountId);
        })


    });
});
