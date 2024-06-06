it("async behavior ", () => {
  let message = "Hello";
  cy.visit("/cypress/index.html");
  cy.get("#welcome")
    .invoke("text")
    .then((text) => {
      message = text;
      expect(message).to.eq("Welcome to Cypress Tutorials");
    });
});
