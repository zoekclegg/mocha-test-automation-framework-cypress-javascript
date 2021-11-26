/// <reference types="cypress" />

import {ProgressBarPage} from '../page-objects/progress_bar_page'

describe('progress bar tests', () => {
    const progress_bar_page = new ProgressBarPage()

    beforeEach('progress bar tests', () => {
        cy.visit('http://uitestingplayground.com/progressbar');
    })

    const percent = [40, 60, 90]

    percent.forEach((value) => {
        it("can stop progress bar at " + value + "%", () => {
            progress_bar_page.clickStartButton();
            progress_bar_page.progressPercent(value).should('exist');
            progress_bar_page.clickStopButton();

        })
    })



    
})