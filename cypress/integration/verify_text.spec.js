/// <reference types="cypress" />

import {VerifyTextPage} from '../page-objects/verify_text_page'

describe('verify text tests', () => {
    const verify_text_page = new VerifyTextPage()

    beforeEach('set up verify text tests', () => {
        cy.visit('http://uitestingplayground.com/verifytext');
    })

    const text = 'Welcome UserName!';

    it('can find normalised text', () => {
        verify_text_page.getText(text).should('be.visible');
    })
    
})