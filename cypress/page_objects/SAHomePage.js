class SAHomePage {

    constructor(){
        //super();
        this.tutorialCloseBtn = ".sa-tutorial-close-button";
        this.newProjectPopup = "[id*='new-project-locations-window']";
        this.closeNewProjectPopupBtn = "[id*='close-button']";
        this.nextBtn = "div.sa-new-project-window-footer > button"; // contains('span', 'Next')
        this.usernameHeaderBtn="button.sa-page-header-username-button";
        this.signoutLink="Sign Out";
        this.locationInput = "input[id*='location-search-field']";
        this.locationList = "span.sa-sidebar-location-name";
        this.createProjBtn = "Create project";
        this.filteringBtn = "[id*='pvt-filtering-button']";
        this.filterList = ".sa-filters-attribute-list-item";
        this.locationDropdown = "[id*='pvt-location-dropdown'] > span";
        this.openProjBtn = ".sa-page-header-open-button";
        this.projName = ".sa-open-project-menu-item-name";
        this.newProjBtn = ".sa-page-header-new-button";
        this.currentProjName = ".sa-page-header-project-name";
        this.changeNameInput = "input[id*='sa-text-field']";
    }

    closeTutorial(){
        cy.get(this.tutorialCloseBtn).click();
    }

    closeNewProjectPopup(){
        cy.get(this.newProjectPopup).find(this.closeNewProjectPopupBtn).click();
    }

    logout(){
        cy.get(this.usernameHeaderBtn).click();
        cy.contains(this.signoutLink).click();
    }

    typeNewLocation(location){
        cy.get(this.newProjectPopup).find(this.locationInput).clear().type(location);
    }

    clickNextBtn(){
        cy.get(this.nextBtn).click();
    }

    clickOnTheLocationNameFromList(location){
        cy.get(this.locationList).contains(new RegExp('^' + location + '$')).click();
    }

    clickOnCreateProjectBtn(){
        cy.contains("button", this.createProjBtn).click();
    }

    checkForTheCorrectLocation(city){
        cy.get(this.locationDropdown).should('have.text', city);
    }

    clickOnTheFilteringBtn(){
        cy.get(this.filteringBtn).click();
    }

    checkForFilteringPresence(filter){
        cy.get(this.filterList).contains(filter);
    }

    clickOpenProjBtn(){
        cy.get(this.openProjBtn).click();
    }

    checkForProjectPresenceByName(name){
        cy.get(this.projName).contains(new RegExp('^' + name + '$'));
    }

    clickNewProjBtn(){
        cy.get(this.newProjBtn).click();
    }

    checkCurrentProjectName(name){
        cy.get(this.currentProjName).contains(new RegExp('^' + name + '$'));
    }

    clickOnTheProjNameInHeader(){
        cy.get(this.currentProjName).click();
    }

    changeProjName(newName){
        cy.get(this.changeNameInput).eq(1).clear().type(newName + '{enter}');
    }

}
export const saHomePage = new SAHomePage()