/// <reference types="cypress" />

import {TextInputPage} from '../page-objects/text_input_page'

describe('text input tests', () => {
    const text_input_page = new TextInputPage()

    beforeEach('set up text input tests', () => {
        cy.visit('http://uitestingplayground.com/textinput');
    })

    const buttonData = ['My Button', 'Click Here', 'ADD TO BASKET']

    buttonData.forEach((text) => {
        it('verify new button text', () => {
            text_input_page.inputNewButtonText(text);
            text_input_page.clickButton();
            text_input_page.getButtonText().should('eq',text)
        })
    })
    
})