/// <reference types="cypress" />

import {LoadDelayPage} from '../page-objects/load_delay_page'
import {Homepage} from '../page-objects/homepage'

describe('load delay tests', () => {
    const homepage = new Homepage()
    const load_delay_page = new LoadDelayPage()

    beforeEach('set up class attribute tests', () => {
        cy.visit('http://uitestingplayground.com/');
    })

    it('can handle load delay', () => {
        
        homepage.clickLink('Load Delay')
        load_delay_page.clickButton();
        load_delay_page.getButton().should('be.visible');

    })
    
})