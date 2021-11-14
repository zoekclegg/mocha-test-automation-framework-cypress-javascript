export class ClassAttributePage {

    clickDynamicButton() { 
        cy.xpath("//button[contains(@class,'btn-primary')]").click(); 
        
    }

    assertAlertText() {
        cy.on('window:alert',(txt)=>{
            expect(txt).eq('Primary button pressed');
        })

    }
}