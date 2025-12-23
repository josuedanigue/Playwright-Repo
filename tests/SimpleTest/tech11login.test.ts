import{test,  expect } from'@playwright/test' 

test('login page', async({page, context })=>{
    await page.goto("https://test-03.com");
    await page.fill('[name="username"]', 'niemeier@example.com');
    await page.fill('[name="password"]', 'ixiKRjGTws2zDYiHU5nfLYBz2fzSGCvK');
    await page.click('#kc-login');

    await expect(page.locator('h1.display-1.m-5:has-text("tech11")')).toBeVisible();

    await page.click('a[href="./clerk-ui"]');
    await expect(page).toHaveURL("https://test-03.com/clerk-ui/");

    await page.waitForSelector('#home-screen-buttons');

    
})
