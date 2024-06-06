/// <reference types="Cypress" />


// it --> describe a tet case in mocha
// it --> tow arguments: the first argument is the name of the test case, the second argument is the steps

// describe --> suite our test cases
// context --> the same of describe

// it will be execute only one time before all the test cases
// if we have 3 test cases, the before Hook will be execute only one time
before(() => {
    cy.log('I am inside the before hook')
})

// it will execute before all and every test cases
// if we have 3 test cases, the before each will execute 3 times
beforeEach(() => {
    cy.log('I am inside the beforeEach hook')
})

// it will be execute only one time after all the test cases
// if we have 3 test cases, the after Hook will be execute only one time
after(() => {
    cy.log('I am inside the after hook')
})

// it will execute after all and every test cases
// if we have 3 test cases, the after each will execute 3 times
afterEach(() => {
    cy.log('I am inside the afterEach hook')
})

describe('login functionality', () => {
    it('should login with valid email and password correctly', () => {
        cy.log('should login with valid email and password correctly')
    })

    it('should not login if the user name is wrong', () => {
        cy.log('I am inside test case 2')
    })

    it('should be able to reset the password', () => {
        cy.log('I am inside test case 3')
    })
})

describe('order functionality', () => {
    it('should be able to order a new food', () => {
        cy.log('I am inside test case 4')
    })
})

