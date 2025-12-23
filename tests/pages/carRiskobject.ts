import {expect, Page} from "@playwright/test";

export class CarRiskobject {
    readonly page : Page;
    readonly createRiskObjectButton;
    readonly riskObjectDefinition;
    readonly oesearch;
    readonly searchButton; 
    readonly riskobjectname;
    readonly wkz;
    readonly hsn;
    readonly tsn;
    readonly kw;
    readonly carmodel;
    readonly dateOfRegistration;
    readonly value;
    readonly finalCreateRoButton;
    readonly processingButtonOK;
    readonly btxlist;
    readonly executeButton;
    readonly editRObutton;
    readonly btxcause;
    

   //Elements 
    constructor(page:Page){
        this.page = page;
        this.createRiskObjectButton = page.locator('#createRiskObjectButton');
        this.riskObjectDefinition = page.locator('#riskObjectDefinition');
        this.oesearch = page.getByPlaceholder('Search for Organization Entities');
        this.searchButton = page.locator('.btn.btn-search');
        this.riskobjectname = page.locator('input#CAR-attributes-name');
        this.wkz = page.locator('#CAR-categorizedAttributes-RO_CAR-attributes-WKZ');
        this.hsn = page.locator('#CAR-categorizedAttributes-RO_CAR-attributes-HSN');
        this.tsn = page.locator('#CAR-categorizedAttributes-RO_CAR-attributes-TSN');
        this.kw = page.locator('#CAR-categorizedAttributes-RO_CAR-attributes-KW');
        this.carmodel = page.locator('#CAR-categorizedAttributes-RO_CAR-attributes-CAR_NAME');
        this.dateOfRegistration = page.locator('#CAR-categorizedAttributes-RO_CAR-attributes-FIRST_REGISTRATION');
        this.value = page.locator('#CAR-categorizedAttributes-RO_CAR-attributes-NW');     
        this.finalCreateRoButton = page.locator('#btnCreateRiskObject'); 
        this.processingButtonOK = page.locator('#processingBoxBtnOk');
        this.btxlist = page.locator('#btx-selection');
        this.executeButton = page.locator('#button_btxExecute');
        this.editRObutton = page.locator('#btnBtxStart');
        this.btxcause = page.locator('#cv-changeLog-btxCause');
    }
    // Methods 
    oeResultRow(oeName: string) {
        return this.page.locator(`tr:has-text("${oeName}") >> td:nth-child(2)`);
    }

    // Method to select OE
    async selectOE(oeName: string) {
        
        await this.oesearch.fill(oeName);
         
        await this.searchButton.click();
         
        const row = this.oeResultRow(oeName);
        await expect(row).toBeVisible({ timeout: 10000 });
        await row.click();
    }

    async loadCarForm(){
        await expect(this.createRiskObjectButton).toBeVisible({
            timeout: 10000
        });
    }
    async fillForm (data:{
        definition: string;
         oeName: string;
         name: string;
         wkz: string;
         hsn: string;
         tsn: string;
         kw: string;
         model: string;
         registrationDate: string;
         value: string;
    })
    {
        await this.createRiskObjectButton.click();
        await this.riskObjectDefinition.selectOption(data.definition);
        await this.selectOE(data.oeName);
        
        await this.riskobjectname.fill(data.name);
        await this.wkz.fill(data.wkz);
        await this.hsn.fill(data.hsn);
        await this.tsn.fill(data.tsn);
        await this.kw.fill(data.kw);
        await this.carmodel.fill(data.model);
        await this.dateOfRegistration.fill(data.registrationDate);
        await this.value.fill(data.value);
        await this.finalCreateRoButton.click();
    }; 
    async processingRiskObject() {
        await this.processingButtonOK.click();
        timeout:10000
    } async btx3000RO(data:{

        
         
         name: string;
         wkz: string;
         hsn: string;
         tsn: string;
         kw: string;
         model: string;
         registrationDate: string;
         value: string;
        })
        {
        await this.btxlist.selectOption({value: 'risk-object-3000'});
        await this.executeButton.click();
        await this.btxcause.selectOption({value:'REASON_1'});
        await this.riskobjectname.fill(data.name);
        await this.wkz.fill(data.wkz);
        await this.hsn.fill(data.hsn);
        await this.tsn.fill(data.tsn);
        await this.kw.fill(data.kw);
        await this.carmodel.fill(data.model);
        await this.dateOfRegistration.fill(data.registrationDate);
        await this.value.fill(data.value);

        await this.editRObutton.click();
        await this.processingButtonOK.click();

    }

}