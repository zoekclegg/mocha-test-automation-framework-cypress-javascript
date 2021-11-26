export class VerifyTextPage {

    getText(text){
        return cy.xpath("//span[normalize-space(.)='" + text + "']");
    }

}