import { expect, Page} from '@playwright/test';

export class RiskObjectDetailsPage{
    readonly page: Page;
    readonly documentTab;
    readonly riskobjectID;
    readonly browsefile;
    readonly Inout;
    readonly uploadButton;
    readonly btxSelection;
    readonly btxExecute;

    constructor(page: Page){
        this.page = page;
        this.documentTab = page.locator('#tab-documents');
        this.riskobjectID = page.locator('#header-subtitle');
        this.browsefile = page.locator('#addFilesManualLabel');
        this.Inout = page.locator('#category-select-message-direction-0');
        this.uploadButton = page.locator('#uploadFiles');
        this.btxSelection = page.locator('#btx-selection');
        this.btxExecute = page.locator('#button_btxExecute');
        

    }
    async gotoDocumetTab(riskID: string){
        //Assert the picked riskobjectID is showing
        await expect(this.riskobjectID).toBeVisible({timeout:5000});
        await expect(this.riskobjectID).toContainText(riskID);

        await this.documentTab.click();
        //upload file
        const filepath = 'tests/fixtures/sample.pdf';
        await this.browsefile.setInputFiles(filepath);
         await expect(this.Inout).toBeVisible();
         await expect(this.Inout).toBeEnabled();

        await this.Inout.selectOption({ value: 'INWARDS'});

        await this.uploadButton.click();

        await this.page.waitForLoadState('networkidle');

        

    }

    //async login(username: string, password: string){}
}