/// <reference types="cypress" />

import {DynamicIDPage} from '../page-objects/dynamicid_page'

describe('dynamic button tests', () => {
    const dynamicid_page = new DynamicIDPage()

    beforeEach('set up dynamic buttons tests', () => {
        cy.visit('http://uitestingplayground.com/dynamicid');
    })

    it('click on dynamic button', () => {
        dynamicid_page.clickDynamicButton();
    })
    
})