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

describe('Check Log-out - negative testing', () => {

    it('Check Logout with valid data', () => {       
        loginPage.fillCredentialsData();
        loginPage.clickSignInButton();

        mainPage.clickLogoutButton();

        mainPage.verifyIfBasicElementsAreDisplayed();

        });
    });