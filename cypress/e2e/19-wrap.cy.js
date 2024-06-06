it("wrap command Demo", () => {
  let student = {
    name: "Anes",
    family: "Faker",
    isQA: true,
    isWatching: function () {
      console.log("He is watching");
    },
  };
  
  const message = "Welcome to QAcart";

  // Yields whatever is passed into .wrap() to the next command in the Cypress chain.
  //@see — https://on.cypress.io/wrap

  cy.visit("/cypress/index.html");
  cy.wrap(student).should("have.property", "family", "Faker");

  cy.wrap(message).should("eq", "Welcome to QAcart");
});
