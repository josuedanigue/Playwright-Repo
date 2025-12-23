import{test, expect } from '@playwright/test';
import{login} from '../utils/login';

test('create policy', async({page})=>{
    await login(page);
    await expect (page.locator('#home-screen-buttons')).toBeVisible();
    await page.click('a[href="#/product-selector"]');
    await expect(page.locator('#product-selector-overview')).toBeVisible();

    await page.click('a[href="#/policies/new/HR18"]');
    await expect(page).toHaveURL("https://test-03.com/clerk-ui/#/policies/new/HR18");
    
    await page.selectOption('#cv-contractTermType', 'TWELVE_MONTHS');
    await page.getByPlaceholder('Search for Agents and OEs').fill('ACY.3021715');
    await page.click('.btn.btn-search');
    const oeResultLocator = page.locator('#searchResult >> text=ACY.3021715');
    await expect(oeResultLocator).toBeVisible();
    await oeResultLocator.click();

    await page.selectOption('#cv-administrativeData-contractTerm', 'P1Y')
    await page.selectOption('#cv-administrativeData-currencyCode', 'EUR')
    await page.getByPlaceholder('Search for partner').fill('K3021208');
    await page.click('.btn.btn-search');

    const partnerResultLocator = page.locator('#searchResult >> text=K3021208');
    await expect(partnerResultLocator).toBeVisible();
    await partnerResultLocator.click();
    
    await page.click('#totalnet.netisundjuns sjejb')
    await page.fill('#cv-riskCalcData-BUILDING-attributes-LIVING_AREA', '150');
    await page.selectOption('#cv-riskCalcData-BUILDING-attributes-FLAT_TYPE', 'EFH');

    await page.selectOption('#cv-salesProduct-products-HR-attributes-PACKAGE', 'BASIS');
    await page.selectOption('#cv-salesProduct-products-HR-basicProducts-HR-attributes-DEDUCTIBLE', '150');

    await page.selectOption('#cv-administrativeData-paymentData-paymentFrequency', '1');
    await page.selectOption('#cv-administrativeData-paymentData-paymentMethod', 'BANK_TRANSFER');
    await page.click('#btnIssuePolicy');
    await expect(page.locator('#product-selector-overview')).toBeVisible();
    await page.pause() ;

    





})
