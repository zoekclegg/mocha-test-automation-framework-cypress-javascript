/// <reference types="cypress" />

import {MouseOverPage} from '../page-objects/mouse_over_page'

describe('mouse over tests', () => {
    const mouse_over_page = new MouseOverPage()

    beforeEach('set up mouse over tests', () => {
        cy.visit('http://uitestingplayground.com/mouseover');
    })

    it('can record click count', () => {
        mouse_over_page.clickLink();
        mouse_over_page.getClickCount().should('equal', '1');
        mouse_over_page.clickHoverLink();
        mouse_over_page.getClickCount().should('equal', '2');
    })

})