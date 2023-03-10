class CompletedContentPage {
    private backHomeBtn: string;
    private successMessage: string;
    private completedLbl: string;

    constructor() {
        this.backHomeBtn = "[data-test=\"back-to-products\"]";
        this.successMessage = ".complete-header";
        this.completedLbl = ".complete-text";
    }

    public backHomeBtnn(): void {
        cy.get(this.backHomeBtn).click()
    }

    public verifySuccessMessage(messages:string): void {
        cy.get(this.successMessage).should("have.text", messages);
    }

    public verifyLabelMessage(messages:string): void{
        cy.get(this.completedLbl).contains(messages);
    }

}
export { CompletedContentPage }
