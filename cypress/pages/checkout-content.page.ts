class CheckoutContentPage {
    private checkoutBtn: string
    private titleItem: string;
    private priceItem: string;

    constructor() {
        this.checkoutBtn = "[data-test=\"checkout\"]";
        this.titleItem = ".inventory_item_name";
        this.priceItem = ".inventory_item_price";
    }

    public checkoutItem():void{
        cy.get(this.checkoutBtn).click();
    }

    public verifyTitle(messages:string): void {
        cy.get(this.titleItem).should("have.text", messages);
    }

    public verifyPrice(messages:string): void {
        cy.get(this.priceItem).should("have.text", messages);
    }
}
export { CheckoutContentPage }