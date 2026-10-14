import { type Page } from '@playwright/test'

export function dismissDialog(page: Page): void {
    page.on('dialog', async (dialog) => {
        await dialog.dismiss()
    })
}

export function acceptDialog(page: Page): void {
    page.on('dialog', async (dialog) => {
        await dialog.accept()
    })
}

export function handleConsoleErrors(page: Page): void {
    page.on('console', message => {
        if (message.type() === 'error') {
            console.error(`[Console Error] ${message.text()}`)
        }
    })
}

export function handlePageErrors(page: Page): void {
    page.on('pageerror', error => {
        console.error(`[Page Error] ${error.message}`)
    })
}

export function handleHttpErrors(page: Page): void {
    page.on('response', response => {
        if (response.status() >= 400) {
            console.error(
                `[HTTP Error] ${response.status()} ${response.url()}`
            )
        }
    })
}

// Register common diagnostic listeners
export function handleCommonEvents(page: Page): void {
    handleConsoleErrors(page)
    handlePageErrors(page)
    handleHttpErrors(page)
    dismissDialog(page)
}