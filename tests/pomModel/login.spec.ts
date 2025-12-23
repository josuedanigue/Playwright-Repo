import{test, expect } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';

test('User can log in successfully', async ({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('claudia.niemeier@example.com', 'ixiKRjGTws2zDYiHU5nfLYBz2fzSGCvK');

    await expect(page.locator('h1.display-1.m-5:has-text("tech11")')).toBeVisible();

    await page.click('a[href="./clerk-ui"]');
    await expect(page).toHaveURL("https://test-01.tech11.com/clerk-ui/");

    await page.waitForSelector('#home-screen-buttons');

})