import { Page } from "playwright/test";

export default class PajeObjectModel{
    integraLogo: any;
    careersButton: any;
    contactUsButton: any;
    searchButton: any;
    searchPlaceHolder: any;
    loginButton: any;
    joinTodayButton: any;

    constructor(public page : Page){
        this.page = page
        this.integraLogo = page.locator('.elementor-widget-container > a');
        this.careersButton = page.getByRole('link', { name: 'CAREERS', exact: true });
        this.contactUsButton = page.getByRole('link', { name: 'CONTACT US', exact: true })
        this.searchButton = page.getByRole('button', { name: 'Search' })
        this.searchPlaceHolder = page.getByPlaceholder('Search...');
        this.loginButton = page.getByRole('link', { name: 'LOG IN', exact: true })
        this.joinTodayButton = page.getByRole('link', { name: 'JOIN TODAY' })
    }

    public async clickOnCareers(){
        await this.careersButton.click();
    }

    public async clickOnContactUs(){
        await this.contactUsButton.click();
    }

    public async clickOnSearchButton(){
        await this.searchButton.click();
    }

    public async clickOnLoginButton(){
        await this.loginButton.click();
    }

    public async clickOnJoinTodayButton(){
        await this.joinTodayButton.click();
    }

    public async enterSearchCriteria(){
        await this.searchPlaceHolder.fill('health plans');
    }
}