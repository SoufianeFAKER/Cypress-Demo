it("then command Demo", () => {
  cy.visit("/cypress/index.html");
  cy.get("#welcome").invoke("text");
  cy.get("#welcome")
    .invoke("text")
    .then((var_text) => {
      cy.log(var_text);
    });
});
