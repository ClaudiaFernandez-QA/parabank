import { expect, test } from "@playwright/test";
import { HomePage } from "../../src/pages/homePage";

test.describe('Funcionalidad Home', () => {

    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
    })

    test('Se visualizan todos los elementos de la sección Customer Login', async () => {

        await expect(homePage.customerLoginTitle).toBeVisible();
        await expect(homePage.usernameLabel).toBeVisible();
        await expect(homePage.usernameInput).toBeVisible();
        await expect(homePage.usernameInput).toBeEnabled();
        await expect(homePage.passwordLabel).toBeVisible();
        await expect(homePage.passwordInput).toBeVisible();
        await expect(homePage.passwordInput).toBeEnabled();
        await expect(homePage.loginButton).toBeVisible();
        await expect(homePage.loginButton).toBeEnabled();
        await expect(homePage.loginInfoLink).toBeVisible();
        await expect(homePage.registerLink).toBeVisible();
    })


})


