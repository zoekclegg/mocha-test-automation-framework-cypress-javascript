export class SampleAppPage {

    clickLoginButton(){
        cy.get('#login').click();
    }

    inputLoginCredentials(username, password){
        if(username!=""){
            cy.xpath("//input[@name='UserName']").type(username);
        }
        if(password!=""){
            cy.xpath("//input[@name='Password']").type(password);
        }
    }

    getLoginStatusText(){
        return cy.get('#loginstatus').invoke('text');
    }

}