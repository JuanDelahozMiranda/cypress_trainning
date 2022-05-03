describe('Build first Test', ()=>{
    it('type into a DOM element', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.wait(3000)
        cy.get('.action-email')
          .type('fake@email.com').should('have.value', 'fake@email.com')
    })
})