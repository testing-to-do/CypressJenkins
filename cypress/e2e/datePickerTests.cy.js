/// <reference types="Cypress" />


import { basicFunctions } from "../page_objects/BasicFunctions";
import { recurse } from "cypress-recurse";

describe('Date Picker', () => { 

    beforeEach(()=> {
        cy.visit("https://www.way2automation.com/way2auto_jquery/datepicker.php#load_box");
        
    })

    it.only('default', () => {
        //cy.get("[href='#example-1-tab-3']").click();
        cy.frameLoaded("#example-1-tab-1 > div > iframe");
        cy.iframeFindEl("1","#datepicker").click();
        //cy.iframeFindEl("1","#datepicker").type('10/01/2022');
        recurse(
            () => cy.iframeFindEl("1",".ui-datepicker-month").invoke("text"),
            (n) => {
              if (!n.includes("December")) {
                cy.iframeFindEl("1","[title='Next']").click();
                return false;
              }
              cy.contains("[data-handler='selectDay'] a", "24").click();
              return true;
            },
            {
              limit: 12,
            }
          );

        })

it('Display month & year', () => {
    //cy.get("[href='#example-1-tab-3']").click();
    cy.frameLoaded("#example-1-tab-3 > div > iframe");
    cy.iframeFindEl("3",".ui-selectee").eq(0).click({ctrlKey: true})
    cy.iframeFindEl("3",".ui-selectee").eq(0).should('have.class', "ui-selected")
    //cy.iframeFindEl('3', ".ui-selectee").eq(1).then(function($class){ // this way gets the item selected but the UI does not trigger it as a selected option
        //$class[0].setAttribute('class', 'ui-widget-content ui-selectee ui-selected')
    //})
    cy.iframeFindEl("3",".ui-selectee").eq(1).click({ctrlKey: true})
    cy.iframeFindEl("3",".ui-selectee").eq(1).should('have.class', "ui-selected")

    cy.iframeFindEl("3","#select-result").should('have.text', " #1 #2");
    //cy.get().should('have.c')

})



})




