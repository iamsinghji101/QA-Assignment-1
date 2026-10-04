import { type Page, type Locator } from '@playwright/test'

export class LoginPage {
    readonly page: Page
    readonly userNameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly successLoginHeading: Locator
    readonly logoutButton: Locator
    readonly errormessage: Locator

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username', exact: true });
        this.passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });
        this.submitButton = page.getByRole('button', { name: 'Submit', exact: true });
        this.successLoginHeading = page.locator('.post-content')
        this.logoutButton = page.getByRole('link', { name: 'Log out', exact: true });
        this.errormessage = page.locator('#login>#error')
    }

    async login(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}