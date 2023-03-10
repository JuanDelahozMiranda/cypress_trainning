import {HomeContentPage} from "../pages";
import {ProductsContentPage} from "../pages";
import {CheckoutContentPage} from "../pages";
import {InformationContentPage} from "../pages";
import {OverviewContentPage} from "../pages";
import {CompletedContentPage} from "../pages";

describe("visit site", () => {
    let homeContentPage: HomeContentPage;
    let productPage: ProductsContentPage;
    let checkoutPage: CheckoutContentPage;
    let informationPage: InformationContentPage;
    let overviewPage: OverviewContentPage;
    let completedPage: CompletedContentPage;

    before( ()=>{
        homeContentPage = new HomeContentPage();
        productPage = new ProductsContentPage();
        checkoutPage = new CheckoutContentPage();
        informationPage = new InformationContentPage();
        overviewPage = new OverviewContentPage();
        completedPage = new CompletedContentPage();
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
        productPage.AddItem("Sauce Labs Backpack");
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
        //Assertion
        completedPage.verifySuccessMessage("Thank you for your order!");
        completedPage.verifyLabelMessage("our order has been dispatched");
    });

    Cypress.on("uncaught:exception", (err, runnable) =>{
        return false;
    })
})
