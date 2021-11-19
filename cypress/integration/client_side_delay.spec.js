/// <reference types="cypress" />

import {ClientSideDelayPage} from '../page-objects/client_side_delay_page'

describe('client side delay tests', () => {
    const client_side_delay_page = new ClientSideDelayPage()

    beforeEach('set up client side delay tests', () => {
        cy.visit('http://uitestingplayground.com/clientdelay');
    })

    it('verify element appears after delay', () => {

        client_side_delay_page.clickButton();
        client_side_delay_page.getSuccessMessage().should('eq','Data calculated on the client side.');

    })
    
})