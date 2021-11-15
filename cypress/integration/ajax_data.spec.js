/// <reference types="cypress" />

import {AJAXDataPage} from '../page-objects/ajax_data_page'

describe('ajax data tests', () => {
    const ajax_data_page = new AJAXDataPage()

    beforeEach('set up ajax data tests', () => {
        cy.visit('http://uitestingplayground.com/ajax');
    })

    it('verify ajax request completed', () => {

        ajax_data_page.clickButton();
        ajax_data_page.getSuccessMessage().should('eq','Data loaded with AJAX get request.');

    })
    
})