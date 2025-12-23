import{Page,  expect } from'@playwright/test' 

export async function login(page: Page) {
    await page.goto("https://test-01.tech11.com/");
    await page.fill('[name="username"]', 'claudia.niemeier@example.com');
    await page.fill('[name="password"]', 'ixiKRjGTws2zDYiHU5nfLYBz2fzSGCvK');
    await page.click('#kc-login');

    await expect(page.locator('h1.display-1.m-5:has-text("tech11")')).toBeVisible();

    await page.click('a[href="./clerk-ui"]');
    await expect(page).toHaveURL("https://test-01.tech11.com/clerk-ui/");

    await page.waitForSelector('#home-screen-buttons');

    

    
}
