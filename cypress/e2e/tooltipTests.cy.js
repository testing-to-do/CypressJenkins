/// <reference types="Cypress" />


import { basicFunctions } from "../page_objects/BasicFunctions";
import { recurse } from "cypress-recurse";
const data = require("../fixtures/data.json")

describe('Tooltip', () => { 

    beforeEach(()=> {
        cy.visit("https://www.way2automation.com/way2auto_jquery/tooltip.php#load_box");
        
    })

    it.only('default', () => {
        //cy.get("[href='#example-1-tab-3']").click();
        cy.frameLoaded("#example-1-tab-1 > div > iframe");
        cy.iframeFindEl("1","[title=\"" + data.tooltipMessages[0] +"\"]").realHover();
        cy.wait(1000);
        cy.iframeFindEl("1",".ui-tooltip-content").should("have.text", data.tooltipMessages[0])
        cy.iframeFindEl("1","[title=\"" + data.tooltipMessages[1] +"\"]").realHover();
        cy.wait(1000);
        cy.iframeFindEl("1",".ui-tooltip-content").should("have.text", data.tooltipMessages[1])
        cy.iframeFindEl("1","[title=\"" + data.tooltipMessages[2] +"\"]").realHover();
        cy.wait(1000);
        cy.iframeFindEl("1",".ui-tooltip-content").should("have.text", data.tooltipMessages[2])
        //cy.debug();


        })




})




