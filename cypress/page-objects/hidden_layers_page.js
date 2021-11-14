export class HiddenLayersPage {

    getButton(id) { 
        return cy.get('#' + id); 
        
    }

    clickButton(id) {
        this.getButton(id).click();
    }

    getBgWarning() {
        return cy.get('#bg-warning');
    }

}