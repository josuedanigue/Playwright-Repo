import{Page,  expect } from'@playwright/test' 

export async function ecomlogin(page: Page) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.fill('[name="username"]', 'Admin');
    await page.fill('[name="password"]', 'admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    

    
}
