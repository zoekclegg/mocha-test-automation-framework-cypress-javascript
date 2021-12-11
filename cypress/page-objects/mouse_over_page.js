export class MouseOverPage {

    clickLink(){
        cy.get('.text-primary').trigger('mouseover').click();
    }

    clickHoverLink(){
        cy.get('.text-warning').click();
    }

    getClickCount(){
        return cy.get('#clickCount').invoke('text');
    }

}