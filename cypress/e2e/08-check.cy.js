it('check command Demo', () => {
    cy.visit('cypress/index.html')

    cy.get('#Banana').check()
    cy.get('#Banana').uncheck()

    cy.get('#Manager').check()
})