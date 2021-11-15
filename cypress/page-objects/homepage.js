export class Homepage {

    clickLink(linkText) { 
        cy.xpath("//a[contains(text(),'" + linkText + "')]").click();
    }

}