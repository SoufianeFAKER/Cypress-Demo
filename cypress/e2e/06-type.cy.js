it('Type command Demo', () => {
    cy.visit('cypress/index.html')

    //We can type on any input using the type command
    cy.get("[id = 'inputEmail']").type('sfaker@yahoo.fr{enter}')
    cy.get('#coverdInput').type('anes1234', {
        force: true,
        delay: 1000
    }) 
})