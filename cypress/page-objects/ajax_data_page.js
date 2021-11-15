export class AJAXDataPage {

    clickButton() {
        cy.get('#ajaxButton').click();
    }

    getSuccessMessage() {
        return cy.get('.bg-success', {timeout: 16000}).invoke('text')
    }

}