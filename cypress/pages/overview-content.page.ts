class OverviewContentPage {
    private continueBtn: string
    private titleItem: string;
    private priceItem: string;

    constructor() {
        this.continueBtn = "[data-test=\"finish\"]";
        this.titleItem = ".inventory_item_name";
        this.priceItem = ".inventory_item_price";
    }

    public ContinueBtn():void{
        cy.get(this.continueBtn).click();
    }

    public verifyTitle(messages:string): void {
        cy.get(this.titleItem).should("have.text", messages);
    }

    public verifyPrice(messages:string): void {
        cy.get(this.priceItem).should("have.text", messages);
    }
}
export { OverviewContentPage }
