export class TextInputPage {

    inputNewButtonText(text) {
        cy.get('#newButtonName').type(text);
    }

    getButton(){
        return cy.get('#updatingButton')
    }

    clickButton() {
        this.getButton().click();
    }

    getButtonText() {
        return this.getButton().invoke('text')
    }

}