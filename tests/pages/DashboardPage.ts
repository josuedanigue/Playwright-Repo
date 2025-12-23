import {expect, Page} from "@playwright/test";

export class DashboardPage {
    readonly page : Page;
    readonly issuePolicyButton;
    readonly HomescreenButton;
    readonly riskObjectButton;
    

   //Elements 
    constructor(page:Page){
        this.page = page;
        this.HomescreenButton = page.locator('#home-screen-buttons');
        this.issuePolicyButton = page.locator('#/product-selector');
        this.riskObjectButton = page.locator('a[href="#/risk-objects"]');
        
    }
    // Methods 
    async waitForDashboard(){
        await expect(this.HomescreenButton).toBeVisible({
            timeout: 10000
        });
    }
    async clickIssuePolicy (){
        await this.issuePolicyButton.click();
        await expect(this.issuePolicyButton).toBeVisible({
            timeout:500
        });   
    }
    async clickRiskobject(){
        await this.riskObjectButton.click();
        await expect(this.page).toHaveURL("https://test-01.tech11.com/clerk-ui/#/risk-objects");
    }
    async hr_18Policy(){
        await this.page.click('#/policies/new/HR18');
        await expect(this.page).toHaveURL("https://test-01.tech11.com/clerk-ui/#/policies/new/HR18");
    }
}