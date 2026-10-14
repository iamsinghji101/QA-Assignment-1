import { test, expect } from '../Utils/fixtures'
import { LoginPage } from '../pages/LoginPage'

test('@Smoke -test 1', async ({ loggedInPage }) => {
    const loginPage = new LoginPage(loggedInPage)
    await expect(loggedInPage).toHaveURL(/practicetestautomation.com\/logged-in-successfully/);
    await expect(loginPage.successLoginHeading).toContainText(/Congratulations|successfully logged in/i);
    await expect(loginPage.logoutButton).toBeVisible();
})

