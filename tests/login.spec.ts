import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { validUserCreds, invalidUserCreds } from '../test-data/login-data';

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
})

test('TC_001 Verify login page open', async ({ page }) => {
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
})

test('TC_002 Positive Successful Login test with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(validUserCreds.username, validUserCreds.password);
    await expect(page).toHaveURL(/practicetestautomation.com\/logged-in-successfully/);
    await expect(loginPage.successLoginHeading).toContainText(/Congratulations|successfully logged in/i);
    await expect(loginPage.logoutButton).toBeVisible();
})

test('TC_003 Positive - Verify username field accepts valid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.userNameInput.fill(validUserCreds.username);
    await expect(loginPage.userNameInput).toHaveValue(validUserCreds.username);

})

test('TC_004 Positive - Verify password field accepts valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.passwordInput.fill(validUserCreds.password);
    await expect(loginPage.passwordInput).toHaveValue(validUserCreds.password);
})

test('TC_005 Positive - Verify Submit button enabled', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.userNameInput.fill(validUserCreds.username);
    await loginPage.passwordInput.fill(validUserCreds.password);
    await expect(loginPage.submitButton).toBeEnabled();
})

test('TC_006 Positive - Verify user can logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(validUserCreds.username, validUserCreds.password);
    await expect(page).toHaveURL(/practicetestautomation.com\/logged-in-successfully/);
    await expect(loginPage.logoutButton).toBeVisible();
    await loginPage.logoutButton.click();
    await expect(page).toHaveURL(/practicetestautomation.com\/practice-test-login/);
    await expect(loginPage.submitButton).toBeVisible();
});


test('TC_007 Negative Validate Login attept with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(invalidUserCreds.username, validUserCreds.password);
    await expect(loginPage.errormessage).toContainText(/Your username is invalid!/i);
    await expect(page).not.toHaveURL(/practicetestautomation.com\/logged-in-successfully/);
})

test('TC_008 Negative Validate Login attept with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(validUserCreds.username, invalidUserCreds.password);
    await expect(loginPage.errormessage).toContainText(/Your password is invalid!/i);
    await expect(page).not.toHaveURL(/practicetestautomation.com\/logged-in-successfully/);
})

test('TC_009 Negative - Login attempt with invalid username and invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);  
    await loginPage.login(invalidUserCreds.username, invalidUserCreds.password);
    await expect(loginPage.errormessage).toContainText(/Your username is invalid!/i);
    await expect(page).not.toHaveURL(/practicetestautomation.com\/logged-in-successfully/);
})

test('TC_010 Negative - Login attempt with empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', validUserCreds.password);
    await expect(loginPage.errormessage).toContainText(/Your username is invalid!/i);
    await expect(page).not.toHaveURL(/practicetestautomation.com\/logged-in-successfully/);
})

test('TC_011 Negative - Login attempt with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(validUserCreds.username, '');
    await expect(loginPage.errormessage).toContainText(/Your password is invalid!/i);
    await expect(page).not.toHaveURL(/practicetestautomation.com\/logged-in-successfully/);
})
