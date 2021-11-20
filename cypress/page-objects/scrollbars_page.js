export class ScrollbarsPage {

    getButton(){
        return cy.get('#hidingButton')
    }

    scrollToButton() {
        this.getButton().scrollIntoView();
    }

    clickButton() {
        this.getButton().click();
    }

}