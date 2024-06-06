it("then command Demo", () => {
  cy.visit("/cypress/index.html");
  cy.get("#welcome")
    .invoke("text")
    .then((returnedText) => {
      //cy.wrap(returnedText).should("eq", "Welcome to Cypress Tutorials"); //ou Bien//
      expect(returnedText).to.eq("Welcome to Cypress Tutorials");
    });
});
