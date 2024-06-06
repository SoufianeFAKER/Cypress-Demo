
// with visit command we can go to a normal website or localhost or any html file in the system
// Cypress recommends to set the baseUrl in cypress json file
//We can add a second argument to the visit command, and this argument is an object.
// Inside the object we add our options


// URL for the document: https://www.google.com/search?q=cypress&anes=qacart
it('should visit the website correctly', () => {
    cy.visit({
        url: '/search',
        qs: {
            q: 'cypress',
            anes: 'qacart'
        }
    })
})


