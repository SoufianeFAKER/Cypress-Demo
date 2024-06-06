describe("Aliases", () => {
  it("aliases in Cypress ", () => {
    cy.get("@varUrl").should("contain", "index.html");
  });

  it("aliases in Cypress ", () => {
    cy.get("@varUrl").should("contain", "index.html");
  });
});
