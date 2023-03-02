import { HomeContentPage } from "../pages";
import {ProductsContentPage} from "../pages";

describe("visit site", () => {
    let homeContentPage: HomeContentPage;
    let productpage: ProductsContentPage;

    before( ()=>{
        homeContentPage = new HomeContentPage();
        productpage = new ProductsContentPage();
    });

    it("Login in sauce Page with Empty fields", () =>{
        homeContentPage.visitHomeContentPage();
        homeContentPage.goToLoginButton();
        homeContentPage.verifyErrorMessage("Epic sadface: Username is required");
    });

    it("Login in sauce Page with Valid credentials", () =>{
        //
        homeContentPage.visitHomeContentPage();
        homeContentPage.typeUsername("standard_user");
        homeContentPage.typePassword("secret_sauce");
        homeContentPage.goToLoginButton();
        //
        productpage.DisplayContainer();
        productpage.AddItem();
        productpage.verifyTitle("Sauce Labs Backpack");
        productpage.verifyPrice("$29.99");
        productpage.goToShoppingcar();
        //
    });

    Cypress.on("uncaught:exception", (err, runnable) =>{
        return false;
    })
})