import { expect, Page} from '@playwright/test';

export class riskObjectMenu{
    readonly page: Page;
    readonly tablerows;

    constructor(page: Page){
        this.page = page;
        this.tablerows = page.locator('#table-id-riskObjectsListTable tbody tr');

    }
    async selectRandomRisk(){
        //Ensure table is loaded
        await expect(this.tablerows.first()).toBeVisible({ timeout: 15000 });
        const count = await this.tablerows.count();

        if(count ===0) throw new Error('No risk object found');

        const randomIndex = Math.floor(Math.random()*count);
        const row = this.tablerows.nth(randomIndex);
        
       // Select ONLY the RO text link (not the icon link)
       const link = row.getByRole('link', { name: /^RO\d+$/ });

       const href = await link.getAttribute('href');
       if (!href) {
       throw new Error('Risk object link href is missing'); }

       const match = href.match(/RO\d+/);
       if (!match) {
       throw new Error(`Invalid risk object href format: ${href}`);}

       const riskId = match[0];

     await link.click();

     return { riskId };

   
    }
}