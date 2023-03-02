class ProductsContentPage {
    private shoppingbtn: string
    private containeritems: string;
    private itemBackpack_AddBtn: string;
    private titleItem: string;
    private priceItem: string;

    constructor() {
        this.shoppingbtn = ".shopping_cart_link";
        this.containeritems = ":nth-child(2) > :nth-child(1) > #inventory_container";
        this.itemBackpack_AddBtn = "[data-test=\"add-to-cart-sauce-labs-backpack\"]";
        this.titleItem = "#item_4_title_link > .inventory_item_name";
        this.priceItem = ":nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price";
    }

    public goToShoppingcar():void{
        cy.get(this.shoppingbtn).click();
    }

    public AddItem():void{
        cy.get(this.itemBackpack_AddBtn).click();
    }

    public verifyTitle(messages:string): void {
        cy.get(this.titleItem).should("have.text", messages);
    }

    public verifyPrice(messages:string): void {
        cy.get(this.priceItem).should("have.text", messages);
    }

    public DisplayContainer(): void {
        cy.get(this.containeritems).should('be.visible');
    }
}
export { ProductsContentPage }