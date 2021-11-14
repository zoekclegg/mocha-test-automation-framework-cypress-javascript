export class DynamicIDPage {

    clickDynamicButton() { 
        cy.xpath("//button[contains(text(),'Button with Dynamic ID')]").click();
    }

}