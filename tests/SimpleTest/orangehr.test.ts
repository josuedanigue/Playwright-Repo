import{test,  expect } from'@playwright/test' 
test.describe('Login Tests', () => {

    test('valid credential page', async({page, context })=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.fill('[name="username"]', 'Admin');
    await page.fill('[name="password"]', 'admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.waitForTimeout(5000); // Waits for 5000 milliseconds = 5 seconds   
    }) 

    test('invalid credential page', async({page, context })=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.fill('[name="username"]', 'Admin');
    await page.fill('[name="password"]', 'invalidpass');
    await page.getByRole('button', { name: 'Login' }).click();

     await expect(page.getByText('Invalid credentials')).toBeVisible();
})
});

