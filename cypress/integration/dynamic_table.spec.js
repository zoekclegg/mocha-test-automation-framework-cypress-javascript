/// <reference types="cypress" />

import {DynamicTablePage} from '../page-objects/dynamic_table_page'

describe('dynamic table tests', () => {
    const dynamic_table_page = new DynamicTablePage()

    beforeEach('progress bar tests', () => {
        cy.visit('http://uitestingplayground.com/dynamictable');
    })

    it("verify chrome cpu value", () => {
        dynamic_table_page.verifyChromeCPUValue('Chrome','CPU');
    })
     
   
})