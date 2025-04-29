import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../src/pages/registerPage";
import { generateNewUser } from "../../src/utils/generateUser";

test.describe('Funcionalidad: Register', async () => {

    let registerPage: RegisterPage;

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.goto();
    })

    test('Se redirige correctamente a la página de registro @functional', async ({ page }) => {
        await expect(page).toHaveURL(/parabank\/register\.htm/i);

    });

    test('Todos los elementos web cargaron correctamente @ui', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Signing up is easy!' })).toBeVisible();
        await expect(page.getByText('If you have an account with')).toBeVisible();
        await expect(page.getByText('First Name:')).toBeVisible();
        await expect(page.locator('[id="customer\\.firstName"]')).toBeVisible();
        await expect(page.getByText('Last Name:')).toBeVisible();
        await expect(page.locator('[id="customer\\.lastName"]')).toBeVisible();
        await expect(page.getByText('Address:')).toBeVisible();
        await expect(page.locator('[id="customer\\.address\\.street"]')).toBeVisible();
        await expect(page.getByText('City:')).toBeVisible();
        await expect(page.locator('[id="customer\\.address\\.city"]')).toBeVisible();
        await expect(page.getByText('State:')).toBeVisible();
        await expect(page.locator('[id="customer\\.address\\.state"]')).toBeVisible();
        await expect(page.getByText('Zip Code:')).toBeVisible();
        await expect(page.locator('[id="customer\\.address\\.zipCode"]')).toBeVisible();
        await expect(page.getByText('Phone #:')).toBeVisible();
        await expect(page.locator('[id="customer\\.phoneNumber"]')).toBeVisible();
        await expect(page.getByText('SSN:')).toBeVisible();
        await expect(page.locator('[id="customer\\.ssn"]')).toBeVisible();
        await expect(page.getByText('Username:')).toBeVisible();
        await expect(page.locator('[id="customer\\.username"]')).toBeVisible();
        await expect(page.getByText('Password:')).toBeVisible();
        await expect(page.locator('[id="customer\\.password"]')).toBeVisible();
        await expect(page.getByText('Confirm:')).toBeVisible();
        await expect(page.locator('#repeatedPassword')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
    });

    test('Registro exitoso de un usuario @functional', async ({ page }) => {

        const newUserData = generateNewUser();
        await registerPage.registerUser(newUserData);
        await expect(page).toHaveTitle('ParaBank | Customer Created');
        await expect(page.locator('.title')).toHaveText(`Welcome ${newUserData.username}`)
        await expect(page.getByText('Your account was created')).toBeVisible();
        await expect(page.locator('.smallText')).toHaveText(`Welcome ${newUserData.firstName} ${newUserData.lastName}`);
    });

    test('Se valida que los campos son de ingreso obligatorio @functional', async ({ page }) => {
        await page.getByRole('button', { name: 'Register' }).click();
        await expect (page.getByText('First name is required.')).toBeVisible();
        await expect (page.getByText('Last name is required.')).toBeVisible();
        await expect (page.getByText('Address is required.')).toBeVisible();
        await expect (page.getByText('City is required.')).toBeVisible();
        await expect (page.getByText('State is required.')).toBeVisible();
        await expect (page.getByText('Zip Code is required.')).toBeVisible();
        await expect (page.getByText('Social Security Number is')).toBeVisible();
        await expect (page.getByText('Username is required.')).toBeVisible();
        await expect (page.getByText('Password is required.')).toBeVisible();
        await expect (page.getByText('Password confirmation is')).toBeVisible();

    })
    


    test('No permite registrar un usuario con username ya existente @functional', async ({ page }) => {
        const userDuplicado = generateNewUser();
      
        // 1. Registrar usuario por primera vez
        await registerPage.registerUser(userDuplicado);
      
        // 2. Volver a cargar la página de registro
        await page.getByRole('link', { name: 'Log Out' }).click();
        await expect (page).toHaveURL(/index\.htm/i);
        await page.getByRole('link', { name: 'Register' }).click();
      
        // 3. Intentar registrar otro usuario con el mismo username
        const userConMismoUsername = { ...generateNewUser(), username: userDuplicado.username };
        await registerPage.registerUser(userConMismoUsername);
      
        // 4. Validar que aparece un mensaje de error de usuario existente
        await expect(page.getByText('This username already exists.')).toBeVisible();
      });
      
})


