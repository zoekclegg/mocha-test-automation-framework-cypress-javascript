export class LoadDelayPage {

    getButton() {
        return cy.xpath("//button[contains(@class, 'btn-primary')]");
    }

    clickButton() {
        this.getButton().click();
    }

}