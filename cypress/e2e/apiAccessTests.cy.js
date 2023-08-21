/// <reference types="Cypress" />


import { siteHomePage } from "../page_objects/SiteHomePage";
import { saHomePage } from "../page_objects/SAHomePage";
const data = require("../fixtures/data.json")

describe('Institution tests', () => { 

    beforeEach(()=> {
        cy.apiLogin(data.institutionData.validUsername, data.institutionData.validPassword);
    })

    it('Logout as Guest', () => {
        Cypress.on('uncaught:exception', (err, runnable) => { // TODO pogledati koji error pravi ovu poruku i staviti ga da vrati false ukoliko je taj exception
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        saHomePage.closeTutorial();
        saHomePage.closeNewProjectPopup();
        saHomePage.logout();
        siteHomePage.checkIfRightPageLoadedIn(data.apiTesting.urlInterceptTo);
    })

})