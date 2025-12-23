import{test, expect } from '@playwright/test';
import { DashboardPage} from '../pages/DashboardPage';
import { login } from '../utils/login';
import { CarRiskobject } from '../pages/carRiskobject';
//Imports
//Test definition (what scenario)
//Setup / Arrange (create page objects)
//Steps / Actions / Assertions (the user journey)

test.describe('car Risk Object creation',()=>{
    test('user create car risk Object', async({page})=>{
        const dashboardPage = new DashboardPage(page);
        const carRiskObjectPage = new CarRiskobject(page);
     //login
     await login(page);
     //go to dashboard
     await dashboardPage.waitForDashboard();
     await dashboardPage.clickRiskobject();

     //go to car ro
     await carRiskObjectPage.loadCarForm();
     await carRiskObjectPage.fillForm({
         definition: 'CAR',
         oeName: 'ACY.3021730',
         name: 'Santa clara',
          wkz: '123',
          hsn: '4567',
         tsn: '890',
         kw: '110',
         model: 'BMW 3 Series',
         registrationDate: '2022-05-10',
         value: '25000'
        });

      //process the RO creation
     await carRiskObjectPage.processingRiskObject();  
     //Test assertions
     await expect(page).toHaveURL(/#\/risk-objects\/RO\d+/);

     const header = page.locator('h1#header-title');
     await expect(header).toBeVisible({ timeout: 15000 });
     await expect(header).toContainText('Santa clara');

     //const header = page.getByRole('heading', { name: 'Santa Lucy', level: 1 });
     //await expect(header).toBeVisible();


    })
})

