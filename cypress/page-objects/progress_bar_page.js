export class ProgressBarPage {

    clickStartButton(){
        cy.get('#startButton').click();
    }

    clickStopButton(){
        cy.get('#stopButton').click();
    }

    getPercentage(){
        return cy.get('#progressBar').invoke('text');
    }

    progressPercent(value){
        return cy.xpath("//div[@aria-valuenow='" + value + "']", {timeout: 25000});
    }

}