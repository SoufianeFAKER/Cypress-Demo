// We use the Get command to find an element or elements

//We can find an element by tag name

it('find element by tag name', () => {
    cy.visit('cypress/index.html')

    // we put the tag name inside the get command
    //HTML tag
    // The get command will return all the elements that matches the tag name
    cy.get('button')
})

it('find element by ID', () => {
    cy.visit('cypress/index.html')

    // to find any element by ID we use the # symbol
    cy.get('#courses')
})

it('find element by class name', () => {
    cy.visit('cypress/index.html')

    // to find any element by class name we use the . (dot)
    // cy.get('.course-list')
    // In case of compound classes, we can choose only class only
    // cy.get('.list1')
    // In case of compound classes, we can choose two classes by adding . (dot) between
    cy.get('.list1.web')
})

it('find element by attribute', () => {
    cy.visit('cypress/index.html')

    // to find any element using any attribute we use []
    cy.get("[name='Developer']")
})

it('find the first element from a list of elements', () => {
    cy.visit('cypress/index.html')

    // to find the first element from a list of elements we use the first() command
    cy.get('h1').first()
})

it('find the last element from a list of elements', () => {
    cy.visit('cypress/index.html')

    // to find the last element from a list of elements we use the last() command
    cy.get('h1').last()
})

it('find an element from a list of elements by index', () => {
    cy.visit('cypress/index.html')

    // to find the last element from a list of elements we use eq(index) command
    cy.get('h1').eq(0)
})

it('find an element from a list of elements using filter', () => {
    cy.visit('cypress/index.html')

    // to filter some element from a list of elements we use the filter() command
    // we use css selectors inside the filter command
    cy.get('li').filter('.web')
})

it('find the elements using the children command', () => {
    cy.visit('cypress/index.html')

    // to find elements using the parent we use the children command
    // we can use the children command without any arguments and in that case it will return all children
    cy.get('.course-list').children()
    
    // we can add some css selectors to filter our some of the children
    cy.get('.course-list').children('.web')

    cy.get('.course-list').children().first()
    cy.get('.course-list').children().last()
    cy.get('.course-list').children().eq(2)

})

it('find the elements using the find command', () => {
    cy.visit('cypress/index.html')

    // we can find elements based on the parent using the find command find(css selectors)
    cy.get('.course-list').find('.web')
})

it('find the elements using the parent command', () => {
    cy.visit('cypress/index.html')

    // to find elements using the children we use the parent command
    // Parent command will return the direct parent of the element
    cy.get('.list1.web').parent()
    
})

it ('find the elements using the parents command', () => {
    cy.visit('cypress/index.html')

    // to find elements using the children we use the parent command
    // Parents command will return the all parents of the element in an array
    cy.get('.list1.web').parents()
    
})

it('find the elements using the siblings command', () => {
    cy.visit('cypress/index.html')

    // to find elements using the sibling we use the siblings command
    // siblings command will return the all siblings of the element in an array
    cy.get('.list1.web').siblings()
    cy.get('.list1.web').siblings('.web')
    
})

it('find the elements by text', () => {
    cy.visit('cypress/index.html')

    // to find element using text we can use a contains command contains(text)
    cy.contains('Appium')
    cy.get('li').contains('Appium')
    
})

it.only('find elements using the cypress runner', () => {
    cy.visit('cypress/index.html')
    cy.get('.about')
    cy.get(':nth-child(2) > :nth-child(3) > .btn')
})