it('select command Demo', () => {
    cy.visit('cypress/index.html')

    cy.get('#courses').select('selenium')
    cy.get('#courses').select('wdiocourse')
    cy.get('#courses').select(2)
})