['iphone-8', 'ipad-mini', 'samsung-note9'].forEach((viewport) => {
    it('should be able to open a website in different views', () => {
        cy.viewport(viewport)
        cy.visit("cypress/index.html")
    })
})


