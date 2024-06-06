it("clock command Demo", () => {
  let now = new Date("1979 01 30");
  //Mocks global clock and sets current timestamp to the given value.
  // Overrides all functions that deal with time.
  cy.clock(now);
  cy.visit("cypress/index.html");
});
