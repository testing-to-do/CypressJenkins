class LoginInstitution {

    constructor(){
        //super();
        this.institutionUsername = "#institution-sign-in-name-input";
        this.institutionPassword="#institution-sign-in-password-input";
        this.nextBtn="Next";
        this.invalidCred=".form-error";
        this.emptyFields=".field-error";
        
    }

enterUsername(username){
    cy.get(this.institutionUsername).clear().type(username);
}

enterPassword(password){
    cy.get(this.institutionPassword).clear().type(password);
}

clickNextBtn(){
    cy.contains(this.nextBtn).click();
}

verifyErrorPresence(errorType, text){
    if(errorType==="invalid"){
        cy.get(this.invalidCred).should("be.visible").should("contain.text", text);
    }else{
        cy.get(this.emptyFields).should("be.visible").should("contain.text", text);
    }
}


}
export const loginInstitution = new LoginInstitution();