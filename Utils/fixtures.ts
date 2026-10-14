import { test as base, expect, type Page } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { validUserCreds } from '../test-data/login-data'
import { handleCommonEvents } from './evenHandlers'

type MyFixtures = {
    loggedInPage: Page
}

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({ page }, use) => {
        handleCommonEvents(page)
        await page.goto('/practice-test-login/');
        const loginPage = new LoginPage(page);
        await loginPage.login(validUserCreds.username, validUserCreds.password);
        await use(page);
    }
})

export { expect }