/// <reference types="Cypress" />

import { saHomePage } from "../page_objects/SAHomePage";
const data = require("../fixtures/data.json")

describe('Project actions related tests', () => { 

    beforeEach(()=> {
        cy.apiLogin(data.institutionData.validUsername, data.institutionData.validPassword);
    })

    it('Create New Project', () => {
        Cypress.on('uncaught:exception', (err, runnable) => { // TODO pogledati koji error pravi ovu poruku i staviti ga da vrati false ukoliko je taj exception
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        saHomePage.closeTutorial();
        saHomePage.typeNewLocation(data.projTest.location);
        saHomePage.clickOnTheLocationNameFromList(data.projTest.locationFromList);
        saHomePage.clickNextBtn();
        saHomePage.clickOnCreateProjectBtn();
        saHomePage.checkForTheCorrectLocation(data.projTest.locationFromList)
        saHomePage.clickOnTheFilteringBtn();
        saHomePage.checkForFilteringPresence(data.projTest.variablesChecked1);
        saHomePage.checkForFilteringPresence(data.projTest.variablesChecked2)
    })

    it('Open Project', () => {
        Cypress.on('uncaught:exception', (err, runnable) => { // TODO pogledati koji error pravi ovu poruku i staviti ga da vrati false ukoliko je taj exception
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        saHomePage.closeTutorial();
        saHomePage.typeNewLocation(data.projTest.location);
        saHomePage.clickOnTheLocationNameFromList(data.projTest.locationFromList);
        saHomePage.clickNextBtn();
        saHomePage.clickOnCreateProjectBtn();
        saHomePage.checkCurrentProjectName(data.projTest.projectNameOne);
        saHomePage.clickOpenProjBtn();
        saHomePage.checkForProjectPresenceByName(data.projTest.projectNameOne);
        saHomePage.clickNewProjBtn();
        saHomePage.typeNewLocation(data.projTest.city);
        saHomePage.clickOnTheLocationNameFromList(data.projTest.fullCityName);
        saHomePage.clickNextBtn();
        saHomePage.clickOnCreateProjectBtn();
        saHomePage.clickOpenProjBtn();
        saHomePage.checkForProjectPresenceByName(data.projTest.projectNameTwo);
        saHomePage.checkCurrentProjectName(data.projTest.projectNameTwo);

    })

    it.only('Open and rename project', () => {
        Cypress.on('uncaught:exception', (err, runnable) => { // TODO pogledati koji error pravi ovu poruku i staviti ga da vrati false ukoliko je taj exception
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        saHomePage.closeTutorial();
        saHomePage.typeNewLocation(data.projTest.location);
        saHomePage.clickOnTheLocationNameFromList(data.projTest.locationFromList);
        saHomePage.clickNextBtn();
        saHomePage.clickOnCreateProjectBtn();
        saHomePage.checkCurrentProjectName(data.projTest.projectNameOne);
        saHomePage.clickOpenProjBtn();
        saHomePage.checkForProjectPresenceByName(data.projTest.projectNameOne);
        saHomePage.clickNewProjBtn();
        saHomePage.typeNewLocation(data.projTest.city);
        saHomePage.clickOnTheLocationNameFromList(data.projTest.fullCityName);
        saHomePage.clickNextBtn();
        saHomePage.clickOnCreateProjectBtn();
        saHomePage.clickOpenProjBtn();
        saHomePage.checkForProjectPresenceByName(data.projTest.projectNameTwo);
        saHomePage.checkCurrentProjectName(data.projTest.projectNameTwo);
        saHomePage.clickOnTheProjNameInHeader();
        saHomePage.changeProjName(data.projTest.newProjName);
        saHomePage.checkCurrentProjectName(data.projTest.newProjName);

    })

})