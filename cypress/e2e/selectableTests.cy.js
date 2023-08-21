/// <reference types="Cypress" />


describe('Selectable', () => { 

    beforeEach(()=> {
        cy.visit("https://www.way2automation.com/way2auto_jquery/selectable.php#load_box");
        
    })

    it('Selectable first', () => {
        cy.get("[href='#example-1-tab-3']").click();
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