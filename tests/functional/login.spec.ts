import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/loginPage';


test.describe('Funcionalidad de Login', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Login exitoso con usuario válido', async ({ page }) => {
        
        await loginPage.login('john', 'demo'); // Usuario de prueba público

        // Validar que no haya error
        const isErrorVisible = await loginPage.isLoginErrorDisplayed();
        expect(isErrorVisible).toBeFalsy();

        // Validar que nos redirigió al dashboard o al home
        await expect(page).toHaveURL(/overview.htm/i);
    });

    test('Login fallido con usuario inválido', async ({ page }) => {
        await loginPage.login('usuarioFalso', 'claveIncorrecta');

        // Validar que aparezca error
        const isErrorVisible = await loginPage.isLoginErrorDisplayed();
        expect(isErrorVisible).toBeTruthy();

        // Validar el texto del error
        const errorText = await loginPage.getErrorMessageText();
        expect(errorText).toMatch(/The username and password could not be verified/i);
    });

});
