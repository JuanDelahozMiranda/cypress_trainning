class InformationContentPage {
    private continueBtn: string;
    private txtFirstName: string;
    private txtLastName: string;
    private txtPostalCode: string;

    constructor() {
        this.continueBtn = "[data-test=\"continue\"]";
        this.txtFirstName = "[data-test=\"firstName\"]";
        this.txtLastName = "[data-test=\"lastName\"]";
        this.txtPostalCode = "[data-test=\"postalCode\"]";
    }

    public ContinueBtn():void{
        cy.get(this.continueBtn).click();
    }

    public typeFirstName(In_name:string): void{
        cy.get(this.txtFirstName).type(In_name);
    }

    public typeLasttName(In_lastname:string): void{
        cy.get(this.txtLastName).type(In_lastname);
    }

    public typePostalCode(In_postal:string): void{
        cy.get(this.txtPostalCode).type(In_postal);
    }

}
export { InformationContentPage }
