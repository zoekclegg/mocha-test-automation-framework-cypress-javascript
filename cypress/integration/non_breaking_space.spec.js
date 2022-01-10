/// <reference types="cypress" />

import {NonBreakingSpacePage} from '../page-objects/non_breaking_space_page'

describe('non-breaking space tests', () => {
    const non_breaking_space_page = new NonBreakingSpacePage()

    beforeEach('set up non-breaking space tests', () => {
        cy.visit('http://uitestingplayground.com/nbsp');
    })

    it("verify removedButton does not exist", () => {
        non_breaking_space_page.getButton().should('be.visible');
    })
    
})