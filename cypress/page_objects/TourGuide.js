class TourGuide {

    constructor(){
        //super();
        this.nextBtn = ".sa-tutorial-next-button";
        this.backBtn = ".sa-tutorial-back-button";
        this.tourTitle = ".sa-tutorial-slide-active > h3";
        this.replayTourBtn = ".sa-tutorial-replay-button";

    }

    waitForTheNextBtnToAppear(){
        cy.get(this.nextBtn, {timeout: 10000}).should('be.visible');
    }

    clickNextBtn(){
        cy.get(this.nextBtn).click();
    }

    clickBackBtn(){
        cy.get(this.backBtn).click();
    }

    checkCurrentTourGuideTitle(title){
        cy.get(this.tourTitle).should('have.text', title)
    }

    checkTourHappyFlow(title){
        this.checkCurrentTourGuideTitle(title)
        this.clickNextBtn();
    }

    backwardsTour(title){
        this.checkCurrentTourGuideTitle(title);
        this.clickBackBtn();
    }

    clickOnTheReplayTourBtn(){
        cy.get(this.replayTourBtn).click();
    }



}
export const tourGuide = new TourGuide()