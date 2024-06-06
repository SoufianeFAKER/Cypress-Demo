it("invoke command Demo", () => {
    let student = {
      name: "Anes",
      family: "Faker",
      isQA: true,
      isWatching: function () {
        return 'Hello ' + this.name + ' ' + this.family
      },
    };
  
    cy.visit("/cypress/index.html"); 
    cy.wrap(student).invoke('isWatching').should('contain', 'Anes Faker')
  });