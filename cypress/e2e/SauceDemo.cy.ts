import { HomeContentPage } from "../pages";
import {ProductsContentPage} from "../pages";
import {CheckoutContentPage} from "../pages";
import {InformationContentPage} from "../pages";
import {OverviewContentPage} from "../pages";

describe("visit site", () => {
    let homeContentPage: HomeContentPage;
    let productPage: ProductsContentPage;
    let checkoutPage: CheckoutContentPage;
    let informationPage: InformationContentPage;
    let overviewPage: OverviewContentPage;

    before( ()=>{
        homeContentPage = new HomeContentPage();
        productPage = new ProductsContentPage();
        checkoutPage = new CheckoutContentPage();
        informationPage = new InformationContentPage();
        overviewPage = new OverviewContentPage();
    });

    it("Login in sauce Page with Empty fields", () =>{
        //Arrange
        homeContentPage.visitHomeContentPage();
        //Action
        homeContentPage.goToLoginButton();
        //Assertion
        homeContentPage.verifyErrorMessage("Epic sadface: Username is required");
    });

    it("Login in sauce Page with Valid credentials and buy T-shirt", () =>{
        //Arrange
        homeContentPage.visitHomeContentPage();
        homeContentPage.typeUsername("standard_user");
        homeContentPage.typePassword("secret_sauce");
        homeContentPage.goToLoginButton();
        //Action
        productPage.DisplayContainer();
        productPage.AddItem();
        //Assertion
        productPage.verifyTitle("Sauce Labs Backpack");
        productPage.verifyPrice("$29.99");
        
        //Action
        productPage.goToShoppingcar();
        //Assertion
        checkoutPage.verifyTitle("Sauce Labs Backpack");
        checkoutPage.verifyPrice("$29.99");
        
        //Action
        checkoutPage.checkoutItem();
        informationPage.typeFirstName("Cypress");
        informationPage.typeLasttName("workshop");
        informationPage.typePostalCode("80001");
        informationPage.ContinueBtn();
        //Assertion
        overviewPage.verifyTitle("Sauce Labs Backpack");
        overviewPage.verifyPrice("$29.99");
        
        //Action
        overviewPage.ContinueBtn();
    });

    Cypress.on("uncaught:exception", (err, runnable) =>{
        return false;
    })
})