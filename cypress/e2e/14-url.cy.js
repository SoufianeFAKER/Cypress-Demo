it("get url", () => {
  cy.visit("cypress/index.html");
  cy.url();
  cy.url().should("contain", "cypress/index.html");
});
