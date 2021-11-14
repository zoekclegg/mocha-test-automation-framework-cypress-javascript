/// <reference types="cypress" />

import {HiddenLayersPage} from '../page-objects/hidden_layers_page'

describe('hidden layers tests', () => {
    const hidden_layers_page = new HiddenLayersPage()

    beforeEach('set up hidden layers tests', () => {
        cy.visit('http://uitestingplayground.com/hiddenlayers');
    })

    it('cannot click green button twice', () => {
        
        hidden_layers_page.clickButton('greenButton');
        hidden_layers_page.clickButton('greenButton');
        cy.once('fail', (err) => {
            expect(err.message).to.include('is being covered by another element');
          });

    })
    
})