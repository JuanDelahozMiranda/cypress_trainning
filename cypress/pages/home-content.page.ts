class HomeContentPage {
    private homeContentPageURL: string
    private loginbtn: string;
    private errorMessage: string;

    constructor() {
        this.homeContentPageURL = "https://www.saucedemo.com/";
        this.loginbtn = "#login-button";
        this.errorMessage = ".error-message-container";
    }

    public visitHomeContentPage(): void {
        cy.visit(this.homeContentPageURL)
    }

    public goToLoginButton(): void {
        cy.get(this.loginbtn).click()
    }

    public verifyErrorMessage(messages:string): void {
        cy.get(this.errorMessage).should("have.text", messages);
    }

}
export { HomeContentPage }