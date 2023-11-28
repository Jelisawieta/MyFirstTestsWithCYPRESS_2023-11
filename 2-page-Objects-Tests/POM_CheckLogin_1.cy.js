/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";

const loginPage = new LoginPage();
const mainPage = new MainPage();

beforeEach (() => {
    cy.fixture('credentials.json').then((credentials) => { 
    cy.visit(credentials.website);
    });
});

describe('Check if basic elements are displayed', () => {
    
    it('Check if basic elements are displayed', () => {
        loginPage.verifyIfBasicElementsAreDisplayed();
    });
});

    it('Log-in into a bank account using hardcoded data', () => {       
        loginPage.fillCredentialsData();
        loginPage.clickSignInButton();

        mainPage.verifyIfBasicElementsAreDisplayed();
        });