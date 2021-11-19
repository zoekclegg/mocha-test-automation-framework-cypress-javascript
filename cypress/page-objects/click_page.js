export class ClickPage {

    clickButton() {
        cy.get('#badButton').click();
    }

    getGreenButton() {
        return cy.xpath("//button[contains(@class,'btn-success')]")
    }

}