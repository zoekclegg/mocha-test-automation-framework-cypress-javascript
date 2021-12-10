const hideButton = "#hideButton"
const removedButton = "#removedButton"
const zeroWidthButton = "#zeroWidthButton"
const overlappedButton = "#overlappedButton"
const transparentButton = "#transparentButton"
const invisibleButton = "#invisibleButton"
const notDisplayedButton = "#notdisplayedButton"
const offscreenButton = "#offscreenButton"

export class VisibilityPage {

    getButton(button){
        return cy.get(eval(button));
    }

    clickButton(button){
        cy.get(eval(button)).click();
    }

}