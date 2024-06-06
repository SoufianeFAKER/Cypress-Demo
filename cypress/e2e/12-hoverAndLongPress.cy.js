it('hover over command Demo', () => {
    cy.visit('cypress/index.html')
    cy.get('.trigger').trigger('mouseover')
})

it('hover out command Demo', () => {
    cy.visit('cypress/index.html')
    cy.get('.trigger').trigger('mouseout')
})

it.only('log press command Demo', () => {
    cy.visit('cypress/index.html')
    cy.get('.trigger').trigger('mousedown')
    cy.wait(5000)
    cy.get('.trigger').trigger('mouseup')
})