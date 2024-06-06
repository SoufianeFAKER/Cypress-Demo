it("its command Demo", () => {
  let student = {
    name: "Anes",
    family: "Faker",
    isQA: true,
    isWatching: function () {
      console.log("He is watching");
    },
  };

  cy.visit("/cypress/index.html"); // its(): Get a property's value on the previously yielded subject.
  cy.wrap(student).its("name").should("eq", "Anes");
});
