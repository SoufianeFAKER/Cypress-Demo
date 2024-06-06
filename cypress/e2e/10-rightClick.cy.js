it('Right click command Demo', () => {
    cy.visit('cypress/index.html')

    cy.get("[value='Click me']").rightclick()
})