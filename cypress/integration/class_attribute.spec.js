/// <reference types="cypress" />

import {ClassAttributePage} from '../page-objects/class_attribute_page'

describe('class attribute tests', () => {
    const class_attribute_page = new ClassAttributePage()

    beforeEach('set up class attribute tests', () => {
        cy.visit('http://uitestingplayground.com/classattr');
    })

    it('click on primary button', () => {
        
        class_attribute_page.clickDynamicButton();
        class_attribute_page.assertAlertText();

        //cy.xpath("//button[contains(@class,'btn-primary')]").click()
//cy.on('window:alert',(string)=>{
            //expect(string).eq('Primary button pressed');
        //})
    })
    
})