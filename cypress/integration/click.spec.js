/// <reference types="cypress" />

import {ClickPage} from '../page-objects/click_page'

describe('client tests', () => {
    const click_page = new ClickPage()

    beforeEach('set up click tests', () => {
        cy.visit('http://uitestingplayground.com/click');
    })

    it('verify element appears after delay', () => {

        click_page.clickButton();
        click_page.getGreenButton().should('be.visible');

    })
    
})