/// <reference types="cypress" />

beforeEach(() => {
    cy.fixture('credentials.json').then((credentials) => { 
    cy.visit(credentials.website);
});
});

describe('CheckLoginWithInvalidData', () => {
    it('Log-in with invalid data - verification errors', () => {
        cy.get('[data-testid="login-input"').as('myUsername');
        cy.get('[data-testid="password-input"').as('myPassword');
 
        cy.get('@myUsername').type('invalid');
 
        cy.get('@myPassword').type('invalid');

        cy.get('[data-testid="error-login-id"]').should('be.visible').and('contain', 'identyfikator ma min. 8 znaków');

        cy.get('[data-testid="login-button"').should('be.disabled');
     });

     it('Log-in without user login - verification errors', () => {
        cy.get('[data-testid="login-input"').as('myUsername');
        cy.get('[data-testid="password-input"').as('myPassword');
        
        cy.get('@myUsername').type('invalid');
        cy.get('@myUsername').clear();
 
        cy.get('@myPassword').type('invalid');

        cy.get('[data-testid="error-login-id"]').should('be.visible').and('contain', 'pole wymagane');

        cy.get('[data-testid="login-button"').should('be.disabled');
     });

     it('Log-in without password - verification errors', () => {
        cy.get('[data-testid="login-input"').as('myUsername');
        cy.get('[data-testid="password-input"').as('myPassword');
        
        cy.get('@myUsername').type('invalid1');
 
        cy.get('@myPassword').type('invalid');
        cy.get('@myPassword').clear();

        cy.get('.fieldset').click();
 
        cy.get('[data-testid="login-button"').should('be.disabled');

        cy.get('[data-testid="error-login-password"]').should('be.visible').and('contain', 'pole wymagane');
     });

    });