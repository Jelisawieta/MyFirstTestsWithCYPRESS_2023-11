const selectors = { 
    accountNumber: '#account_number',
    userName: '[data-testid="user-name"]',
    messageText: '[data-testid="message-text"]',
    widgetTransferReceiver: '#widget_1_transfer_receiver',
    widgetTransferAmount: '#widget_1_transfer_amount',
    widgetTransferTitle: '#widget_1_transfer_title',
    executeButton: '#execute_btn',
    closeButton: '[data-testid="close-button"]',
    logoutButton: '[data-testid="logout-button"]'
};

class MainPage {
    verifyIfBasicElementsAreDisplayed() {
        cy.get(selectors.accountNumber).should('be.visible').and('contain','(41 4100 1111 1111 1111 1111 0000)');
        cy.get(selectors.userName).should('be.visible').and('contain','Jan Demobankowy');
    }
    verifyTextMessages() {
        cy.get(selectors.messageText).should('be.visible').and('contain','Przelew wykonany! Michael Scott - 500,00PLN - Express Money Transfer Request Check');
    }
    expressMoneyTransferRequestCheck() {
        cy.get(selectors.widgetTransferReceiver).select('Michael Scott');
        cy.get(selectors.widgetTransferAmount).type(500);
        cy.get(selectors.widgetTransferTitle).type('Express Money Transfer Request Check');

        cy.get(selectors.executeButton).click();
        cy.get(selectors.closeButton).click();
    }
    clickLogoutButton() {
        cy.get(selectors.logoutButton).click();
    }

}

export default MainPage;