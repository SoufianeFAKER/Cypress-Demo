it("get title", () => {
  cy.visit("cypress/index.html");
  cy.title();
  cy.title().should('eql', 'Cypress Tutorials')
}); 
