/// <reference types="Cypress" />

const data = require("../fixtures/data.json")
import { tourGuide } from "../page_objects/TourGuide";

describe('Welcome tour', () => { 

    beforeEach(()=> {
        cy.apiLogin(data.institutionData.validUsername, data.institutionData.validPassword);
    })

    it('Go through the welcome tour', () => {
        cy.uncaught();
        tourGuide.waitForTheNextBtnToAppear();
        data.tourTitles.forEach((title) => {
            if(!(title===data.tourTitles[(data.tourTitles.length) - 1])){
                tourGuide.checkTourHappyFlow(title);
            }
            else
            tourGuide.checkCurrentTourGuideTitle(title);
        })

    })

    it('Go through and back the welcome tour', () => {
        cy.uncaught();
        tourGuide.waitForTheNextBtnToAppear();
        data.tourTitlesBackForth.forEach((title) => {
            if(!(title===data.tourTitlesBackForth[(data.tourTitlesBackForth.length) - 1])){
                tourGuide.waitForTheNextBtnToAppear();
                tourGuide.checkTourHappyFlow(title);  
            }
            else
            tourGuide.checkCurrentTourGuideTitle(title);

            cy.log(title);
        })
        data.tourTitlesBackForth.slice().reverse().forEach((title) => {
            cy.log("Start reverse: " + title)
            if(title===data.tourTitlesBackForth[0]){
                tourGuide.checkCurrentTourGuideTitle(title);
            }
            else
            tourGuide.backwardsTour(title);
        })
    })

    it.only('Replay tutorial', () => {
        cy.uncaught();
        tourGuide.waitForTheNextBtnToAppear();
        data.tourTitles.forEach((title) => {
            if(!(title===data.tourTitles[(data.tourTitles.length) - 1])){
                tourGuide.checkTourHappyFlow(title);
            }
            else
            tourGuide.checkCurrentTourGuideTitle(title);
        })

        tourGuide.clickOnTheReplayTourBtn();
        tourGuide.checkCurrentTourGuideTitle(data.tourTitles[0]);

    })

    

})