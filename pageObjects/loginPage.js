const selectors = {
    loginTextbox: '[data-testid="login-input"',
    errorLogin: '[data-testid="error-login-id"]',
    passwordTextBox: '[data-testid="password-input"',
    signInButton: '[data-testid="login-button"'
};

class LoginPage{
    verifyIfBasicElementsAreDisplayed() {
        cy.get(selectors.loginTextbox).should('be.visible');
        cy.get(selectors.passwordTextBox).should('be.visible');
        cy.get(selectors.signInButton).should('be.visible').and('contain', 'zaloguj się');
    }
    fillCredentialsData(username, password) {
        cy.get(selectors.loginTextbox).type('username');
        cy.get(selectors.passwordTextBox).type('password');
    }
    clickSignInButton() {
        cy.get(selectors.signInButton).click();
    }
    fillInvalidData() {
        cy.get(selectors.loginTextbox).type('invalid');
        cy.get(selectors.passwordTextBox).type('invalid');
    }
    verifyIfErrorsAreDisplayed() {
        cy.get(selectors.signInButton).should('be.disabled');
        cy.get(selectors.errorLogin).should('be.visible').and('contain', 'identyfikator ma min. 8 znaków');
    }
}

export default LoginPage;