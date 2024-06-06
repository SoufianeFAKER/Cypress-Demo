it("should be visible command Demo", () => {
  cy.visit("cypress/index.html");

  cy.get("#courses").should("be.visible");
  // cy.get('#courses').should('not.be.visible')
});

it("should have a text command Demo", () => {
  cy.visit("cypress/index.html");

  cy.get("#welcome").should("have.text", "Welcome to Cypress Tutorials");
});

it("should have a text command Demo", () => {
  cy.visit("cypress/index.html");

  cy.get("#welcome").should("have.text", "Welcome to Cypress Tutorials");
});

it("should contain (partial text) command Demo", () => {
  cy.visit("cypress/index.html");

  cy.get("#welcome").should("contain", "Welcome to");
});

it("should have class command Demo", () => {
  cy.visit("cypress/index.html");
  cy.contains("wdio").should("have.class", "web");
});

it("should have css command Demo", () => {
  cy.visit("cypress/index.html");
  cy.get(".focus")
    .focus()
    .should("have.css", "background-color", "rgb(255, 0, 0)");
});

it.only("should have attribute command Demo", () => {
  cy.visit("cypress/index.html");
  cy.get(".invoice-button").first().should("have.attr", "type", "button");
});
