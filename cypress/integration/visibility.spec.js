/// <reference types="cypress" />

import {VisibilityPage} from '../page-objects/visibility_page'

describe('visibility tests', () => {
    const visibility_page = new VisibilityPage()

    beforeEach('set up visibility tests', () => {
        cy.visit('http://uitestingplayground.com/visibility');
    })

    const buttons = ['zeroWidthButton', 'transparentButton', 'invisibleButton', 'notDisplayedButton']

    buttons.forEach((button) => {
        it("verify " + button + " is not visible", () => {
            visibility_page.clickButton('hideButton');
            visibility_page.getButton(button).should('not.be.visible')
        })
    })

    it("verify removedButton does not exist", () => {
        visibility_page.clickButton('hideButton');
        visibility_page.getButton('removedButton').should('not.exist')
    })
    
})