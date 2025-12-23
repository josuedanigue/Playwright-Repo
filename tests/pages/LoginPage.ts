import { Page} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#kc-login');

    }
    async navigate(){
        await this.page.goto('https://test-01.tech11.com');

    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}