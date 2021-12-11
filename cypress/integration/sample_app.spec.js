/// <reference types="cypress" />

import {SampleAppPage} from '../page-objects/sample_app_page'

describe('sample app tests', () => {
    const sample_app_page = new SampleAppPage()

    const validCredentials = ['user', 'pwd']

    const invalidCredentials = [
            ["valid username & invalid password", "user", "invalid"],
            ["valid username & empty password", "user", ""],
            ["empty username & valid password", "", "pwd"],
            ["empty username & empty password", "", ""]
        ] 

    beforeEach('set up sample app tests', () => {
        cy.visit('http://uitestingplayground.com/sampleapp');
    })

    it('can login successfully', () => {
        sample_app_page.inputLoginCredentials(validCredentials[0],validCredentials[1]);
        sample_app_page.clickLoginButton();
        sample_app_page.getLoginStatusText().should('equal','Welcome, ' + validCredentials[0] + '!');
    })

    invalidCredentials.forEach((credentials) => {
        it("can't login with " + credentials[0], () => {
            sample_app_page.inputLoginCredentials(credentials[1],credentials[2]);
            sample_app_page.clickLoginButton();
            sample_app_page.getLoginStatusText().should('equal','Invalid username/password');
        })
    })
    
})