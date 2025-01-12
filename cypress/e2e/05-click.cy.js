it('click command', () => {
    cy.visit('cypress/index.html')
    cy.get('.invoice-button').last().click()
    cy.get('.invoice-button').last().click()
    //cy.get('.hidden-button').last().click({ multiple: true}) hidden-button
    cy.get('.hidden-button').click({force: true})

    // We can click on an element using the click command
    // We van only click on one element
    // We can click on multiple elements if we add { multiple: true}
    //We can click on hidden, or covered elements if we add {force: true}
})