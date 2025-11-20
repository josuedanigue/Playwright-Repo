import{test, expect} from '@playwright/test';
import{login} from './utils/login'

test.describe('Login Tests', () => {
    test('Filter by username', async({page})=>{// Use of search

    await page.getByRole('link', { name: 'admin' }).click();
    await page.fill('input.oxd-input--active', 'Admin');
    await page.click('button:has-text("Search")');

    const firstRow = page.locator('div.oxd-table-row').first();
    const usernameCell = firstRow.locator('div.oxd-table-cell[role="cell"]').nth(1); 
    await expect(usernameCell).toHaveText('Admin');

    await page.waitForTimeout(5000); 

    })
    test('Filter by username', async({page})=>{//Use of Dropdown

    await page.getByRole('link', { name: 'admin' }).click();

    await page.locator('.oxd-select-text').click();
    await page.locator('div[role="option"]:has-text("ESS")').click();
    await expect(page.locator('.oxd-select-text')).toHaveText('ESS');
    await page.click('button:has-text("Search")');

    const rows = page.locator('div.oxd-table-row');
    const rowCount = await rows.count();
        for (let i = 0; i < rowCount; i++) {
    const roleCell = rows.nth(i).locator('div.oxd-table-cell[role="cell"]').nth(2); // Playwright should read through the thrid rows
    await expect(roleCell).toHaveText('ESS');
        }
    })
     
})
