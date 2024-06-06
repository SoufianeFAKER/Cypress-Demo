
it('focus an blur command Demo', () => {
    cy.visit('cypress/index.html')

    cy.get('.focus.blur').focus()
    cy.get('.focus.blur').blur()
})