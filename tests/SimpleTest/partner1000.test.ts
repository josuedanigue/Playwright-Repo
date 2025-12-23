import{test, expect} from '@playwright/test';
import{login} from './utils/login'

test('partner1000', async({page})=>{

    await login(page);
    await page.click('a[href="#/partner/new"]');
    await expect (page).toHaveURL("https://test-03.com/clerk-ui/#/partner/new");

    await page.selectOption('#role', 'POLICY_HOLDER')
    await page.getByPlaceholder('Search for Organization Entities').fill('ACY.3021715');
    await page.click('.btn.btn-search');

    const cell = page.locator('#searchResult tr td:nth-child(3)', { 
        hasText: 'Head Office (ACY.3021715)'});
    await expect(cell).toBeVisible();
    await cell.click();


    await page.selectOption('#person-title', 'MR');
    await page.fill('[name= "Vorname"]', 'Cecilia');
    await page.fill('id=person-name', 'June');
    await page.fill('id=person-birthday', '2000-02-02');
    await page.fill('id=person-email','Cjune@gmail.com');
    await page.fill('id=person-phone','0201231234');

    await page.fill('id=bp-addresses--0--zip', '97070');
    await page.waitForTimeout(5000); // Waits for 5000 milliseconds = 5 seconds

    await page.click('#dropdown-toggle-bp-addresses--0--street');
    await page.waitForSelector('#option-Am-Bruderhof');
    await page.click('#option-Am-Bruderhof');
    await page.fill('#bp-addresses--0--houseNumber','22london');
    await page.waitForTimeout(2000); // Waits for 2000 milliseconds = 2 seconds

    await page.click('.btn.btn-success');

    await page.click('#verification');
    await page.click('#processingBoxBtnStartBtx');

    await page.waitForSelector('#processingBoxModal');
    await page.click('#processingBoxBtnOk');
    await page.waitForTimeout(5000); // Waits for 5000 milliseconds = 5 seconds
    await expect(page.locator('#partner360')).toBeVisible();
    await page.waitForTimeout(5000); // Waits for 5000 milliseconds = 5 seconds





    })