class SignInPage {

    constructor(){
        //super();
        this.emailInput = "#user-sign-in-email-input";
        this.passwordInput = "#user-sign-in-password-input";
        this.signInBtn = "Sign In";
        this.signInGuest = ".user-sign-in-guest-section";
        this.invalidCred=".form-error";
        this.emptyFields=".field-error";
        
    }

checkIfSignInPageLoadedIn(){
    cy.get(this.emailInput).should("be.visible");
    cy.get(this.passwordInput).should("be.visible");
    cy.contains("button",this.signInBtn).should("be.visible");
    cy.get(this.signInGuest).should("be.visible");
}

enterEmail(email){
    cy.get(this.emailInput).clear().type(email);
}

enterPassword(password){
    cy.get(this.passwordInput).clear().type(password);
}

clickSignInBtn(){
    cy.contains("button", this.signInBtn).click();
}

verifyErrorPresence(errorType, text){
    if(errorType==="invalid"){
        cy.get(this.invalidCred).should("be.visible").should("contain.text", text);
    }else{
        cy.get(this.emptyFields).should("be.visible").should("contain.text", text);
    }
}


}
export const signInPage = new SignInPage()