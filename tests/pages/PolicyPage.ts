import { Page, Locator, expect } from '@playwright/test';

export class PolicyPage {
    readonly page: Page;
    readonly contractTermTypeDropdown: Locator;
    readonly oeSearchInput: Locator;
    readonly searchButton: Locator;
    readonly oeResultLocator: Locator;
    readonly agentSelectionInput: Locator;
    readonly contractTermInput: Locator;
    readonly currencyInput: Locator;
    readonly policyHolderSearch: Locator;
    readonly partnerResultLocator: Locator;
    readonly livingAreaInput: Locator;
    readonly flatTypeDropdown: Locator;
    readonly packageDropdown: Locator;
    readonly deductibleDropdown: Locator;
    readonly paymentFrequencyDropdown: Locator;
    readonly issuePolicyButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contractTermTypeDropdown = page.locator('#cv-contractTermType');
        this.oeSearchInput = page.locator('#input_query');
        this.searchButton = page.locator('.btn.btn-search');
        this.oeResultLocator = page.locator('.partner-search-table tbody tr').first();
        this.agentSelectionInput = page.locator('#agent-select-select-dropdown-input');
        this.contractTermInput = page.locator('#cv-administrativeData-contractTerm');
        this.currencyInput = page.locator('#cv-administrativeData-currencyCode');
        this.policyHolderSearch = page.getByPlaceholder('Search for partners');
        this.partnerResultLocator = page.locator('.partner-search-result').first();
        this.livingAreaInput = page.locator('#cv-riskCalcData-BUILDING-attributes-LIVING_AREA');
        this.flatTypeDropdown = page.locator('#cv-riskCalcData-BUILDING-attributes-FLAT_TYPE');
        this.packageDropdown = page.locator('#cv-salesProduct-products-HR-attributes-PACKAGE');
        this.deductibleDropdown = page.locator('#cv-salesProduct-products-HR-basicProducts-HR-attributes-DEDUCTIBLE');
        this.paymentFrequencyDropdown = page.locator('#cv-administrativeData-paymentData-paymentFrequency');
        this.issuePolicyButton = page.locator('#btnIssuePolicy');
    }

    async fillPolicyForm(data: {
        contractTerm: string;
        agent: string;
        currency: string;
        policyHolder: string;
        livingArea: string;
        flatType: string;
        package: string;
        deductible: string;
        paymentFrequency: string;
    }) {
        await this.contractTermTypeDropdown.selectOption(data.contractTerm);

        await this.oeSearchInput.fill(data.agent);
        await this.searchButton.click();
        await this.oeResultLocator.click();

        await this.currencyInput.selectOption(data.currency);

        await this.policyHolderSearch.fill(data.policyHolder);
        await this.partnerResultLocator.click();

        await this.livingAreaInput.fill(data.livingArea);
        await this.flatTypeDropdown.selectOption(data.flatType);
        await this.packageDropdown.selectOption(data.package);
        await this.deductibleDropdown.selectOption(data.deductible);
        await this.paymentFrequencyDropdown.selectOption(data.paymentFrequency);
    }

    async submitPolicy() {
        await this.issuePolicyButton.click();
        await expect(this.page.getByRole('dialog')).toBeVisible();
    }
}
