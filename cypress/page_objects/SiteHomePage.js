class SiteHomePage {

    constructor(){
        //super();
        this.brandingLogo = "#branding";
        this.linkExploreSA = "EXPLORE SIMPLYANALYTICS";
        this.signInBtn = "SIGN IN";
        this.siteContent = "#content";

        
    }

checkIfRightPageLoadedIn(interceptUrl){
    cy.intercept("GET", interceptUrl).as("urlIntercept")
    cy.wait("@urlIntercept", { timeout: 10_000 });
    cy.get(this.brandingLogo).should("be.visible");
    cy.contains(this.linkExploreSA).should("be.visible");
    cy.contains("div.right-block> div > a",this.signInBtn).should("be.visible");
    cy.get(this.siteContent).should("be.visible");
}


}
export const siteHomePage = new SiteHomePage()