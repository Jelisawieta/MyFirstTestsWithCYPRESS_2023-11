/// <reference types="cypress" />

beforeEach(() => {
    cy.fixture('credentials.json').then((credentials) => { 
    cy.visit(credentials.website);
});
});

afterEach(() => {
    cy.log('Results')
});

describe('CheckLoginWithValidData', () => {
    it('Log-in with valid data', () => {
        cy.fixture('credentials.json').then((loginData) => { 
        cy.get('[data-testid="login-input"').clear();
        cy.get('[data-testid="login-input"').type(loginData.myLogin);
         
        cy.get('[data-testid="password-input"').clear();
        cy.get('[data-testid="password-input"').type(loginData.myPassword);
        })
        //cy.get('[data-testid="login-input"').screenshot();

        cy.get('[data-testid="login-button"').click();
        
        cy.get('[data-testid="user-name"').should('be.visible').and('contain', 'Jan Demobankowy');
        cy.get('#account_number').should('be.visible').and('contain', '(41 4100 1111 1111 1111 1111 0000)');
     });

        it('Log-in with valid data - wait before Log-in for a specific amount of time', () => {
            cy.fixture('credentials.json').then((loginData) => { 
            cy.get('[data-testid="login-input"').clear();
            cy.get('[data-testid="login-input"').type(loginData.myLogin);
            cy.wait(1000);
            //cy.screenshot({capture: 'runner'});
             
            cy.get('[data-testid="password-input"').clear();
            cy.get('[data-testid="password-input"').type(loginData.myPassword);
            cy.wait(1000);
            })
            //cy.screenshot({capture: 'runner'});
    
            cy.get('[data-testid="login-button"').click();
            
            cy.get('[data-testid="user-name"').should('be.visible').and('contain', 'Jan Demobankowy');
            cy.get('#account_number').should('be.visible').and('contain', '(41 4100 1111 1111 1111 1111 0000)');
         });
         //cy.screenshot({capture: 'fullPage'});

 });