class HomeContentPage {
    private homeContentPageURL: string
    private loginbtn: string;
    private errorMessage: string;
    private txtuserName: string;
    private txtpassword: string;

    constructor() {
        this.homeContentPageURL = "https://www.saucedemo.com/";
        this.loginbtn = "#login-button";
        this.errorMessage = ".error-message-container";
        this.txtuserName = "[data-test=\"username\"]";
        this.txtpassword = "[data-test=\"password\"]";
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

    public typeUsername(In_user:string): void{
        cy.get(this.txtuserName).type(In_user);
    }

    public typePassword(In_pass:string): void{
        cy.get(this.txtpassword).type(In_pass);
    }

}
export { HomeContentPage }