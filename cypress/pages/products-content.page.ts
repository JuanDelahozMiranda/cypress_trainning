class ProductsContentPage {
    private shoppingbtn: string
    private containerItems: string;
    private availableItems: string;
    private titleItem: string;
    private priceItem: string;

    constructor() {
        this.shoppingbtn = ".shopping_cart_link";
        this.containerItems = ".inventory_container";
        this.availableItems = ".inventory_item_description";
        this.titleItem = "#item_4_title_link > .inventory_item_name";
        this.priceItem = ":nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price";
    }

    public goToShoppingcar():void{
        cy.get(this.shoppingbtn).click();
    }

    private findProductByName(In_Item: string): any {
        return cy.get(this.containerItems).find(this.availableItems).filter(`:contains("${In_Item}")`).find("button");
    }

    public AddItem(In_Item: string):void{
        this.findProductByName(In_Item).click();
    }

    public verifyTitle(messages:string): void {
        cy.get(this.titleItem).should("have.text", messages);
    }

    public verifyPrice(messages:string): void {
        cy.get(this.priceItem).should("have.text", messages);
    }

    public DisplayContainer(): void {
        cy.get(this.containerItems).should('be.visible');
    }
}
export { ProductsContentPage }
