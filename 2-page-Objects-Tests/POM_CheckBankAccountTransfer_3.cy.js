/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";

const loginPage = new LoginPage();
const mainPage = new MainPage();

describe('Check Log-in with invalid data', () => {
    it('Log-in into a bank account using invalid data', () => {
        cy.fixture('credentials.json').then((credentials) => { 
        cy.visit(credentials.website);

        loginPage.fillCredentialsData();
        loginPage.clickSignInButton();
        mainPage.expressMoneyTransferRequestCheck();

        mainPage.verifyTextMessages();
        });
    });
});