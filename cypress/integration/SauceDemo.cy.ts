import { HomeContentPage } from "../pages";

describe("visit site", () => {
    let homeContentPage: HomeContentPage;

    before( ()=>{
        homeContentPage = new HomeContentPage();
    });

    it("visit sauce Demo page", () =>{
        homeContentPage.visitHomeContentPage();
        homeContentPage.goToLoginButton();
        homeContentPage.verifyErrorMessage("Epic sadface: Username is required");
    });

    Cypress.on('uncaught:exception', (err, runnable) =>{
        return false;
    })
})