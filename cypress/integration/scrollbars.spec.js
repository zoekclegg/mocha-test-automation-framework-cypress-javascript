/// <reference types="cypress" />

import {ScrollbarsPage} from '../page-objects/scrollbars_page'

describe('scrollbars tests', () => {
    const scrollbars_page = new ScrollbarsPage()

    beforeEach('set up scrollbars tests', () => {
        cy.visit('http://uitestingplayground.com/scrollbars');
    })

    it('can click button', () => {
        scrollbars_page.scrollToButton();
        scrollbars_page.clickButton();
        scrollbars_page.getButton().should('be.visible');
    })
    
})