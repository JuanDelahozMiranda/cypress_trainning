describe("Build first Test", ()=>{
    it("type into a DOM element", () => {
        cy.visit("https://example.cypress.io/commands/actions")
        cy.get(".action-email")
          .type("ake@email.com").should("have.value", "fake@email.com")
    })
})