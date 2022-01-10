export class NonBreakingSpacePage {

    getButton(){
        return cy.xpath("//button[text()='My\u00A0Button']")
    }

}