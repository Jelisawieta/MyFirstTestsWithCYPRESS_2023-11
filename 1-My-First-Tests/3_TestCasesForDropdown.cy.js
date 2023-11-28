/// <reference types="cypress" />

describe('TestCasesForDropdown', () => {  
it('Select from dropdown', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/');
    
    cy.get('#preferred-interface').select('JavaScript API');

    cy.get('#preferred-interface').should('have.value', 'JavaScript API');

});

it('Select from dropdown - negative testing', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/');
   
    cy.get('#preferred-interface').select(2);

    //cy.screenshot({capture: 'runner'});

    cy.get('#preferred-interface').should('have.value', 'JavaScript API');

});

});