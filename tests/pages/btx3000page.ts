import { expect, Page} from '@playwright/test';

export class btxExecution{
    readonly page: Page;
    readonly riskobjectID;
    readonly browsefile;
    readonly Inout;
    readonly uploadButton;


    
    readonly btxSelection;
    readonly btxExecute;

    constructor(page: Page){
        this.page = page;
        this.riskobjectID = page.locator('#header-subtitle');
        this.browsefile = page.locator('#addFilesManualLabel');
        this.Inout = page.locator('#category-select-message-direction-0');
        this.uploadButton = page.locator('#uploadFiles');
        this.btxSelection = page.locator('#btx-selection');
        this.btxExecute = page.locator('#button_btxExecute');
        

    }
    async btx3000(riskID: string){
       

        

    }

    //async login(username: string, password: string){}
}