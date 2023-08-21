/// <reference types="Cypress" />


describe('Droppable', () => { 

    beforeEach(()=> {
        cy.visit("https://www.way2automation.com/way2auto_jquery/droppable.php#load_box");
        
    })

    it('Droppable first', () => {
        cy.frameLoaded("#example-1-tab-1 > div > iframe");
        cy.iframeFindEl("1","#draggable").realMouseDown().realMouseMove(250, 120).realMouseUp(); // 
        cy.iframeFindEl("1","#droppable").should('have.class', "ui-state-highlight")
        //cy.get().should('have.c')

    })

    it('Accept', () => {
        cy.get("[href='#example-1-tab-2']").click();
        cy.frameLoaded("#example-1-tab-2 > div > iframe");
        cy.iframeFindEl("2","#draggable-nonvalid").realMouseDown().realMouseMove(350, 80).realMouseUp(); // 
        cy.iframeFindEl("2","#droppable").should('not.have.class', "ui-state-highlight")
        cy.iframeFindEl("2","#draggable-nonvalid").realMouseDown().realMouseMove(350, 80).realMouseUp(); // 
        cy.iframeFindEl("2","#draggable").realMouseDown().realMouseMove(200, 80).realMouseUp(); // 
        cy.iframeFindEl("2","#droppable").should('have.class', "ui-state-highlight")
        //cy.get().should('not.have.c')

    })

    it('Prevent Propagation', () => {
        cy.get("[href='#example-1-tab-3']").click();
        cy.frameLoaded("#example-1-tab-3 > div > iframe");
        //cy.iframeFindEl('3', "#draggable").then(function($style){
            //$style[0].setAttribute('style', 'position: relative; width: 100px; inset: 68px auto auto 180px; height: 60px;')
          //})
        cy.iframeFindEl("3","#draggable").realMouseDown().realMouseMove(280, 110).realMouseUp(); // 
        cy.iframeFindEl("3","#droppable").should('have.class', "ui-state-highlight")
        cy.iframeFindEl("3","#droppable-inner").should('have.class', "ui-state-highlight")

        cy.iframeFindEl("3","#draggable").realMouseDown().realMouseMove(250, 40).realMouseUp();
          cy.iframeFindEl("3","#droppable2").should('not.have.class', "ui-state-highlight")
          cy.iframeFindEl("3","#droppable2-inner").should('have.class', "ui-state-highlight")
        //cy.get().should('not.have.c')

    })

    it.only('Revert Draggable Position', () => { // TODO
        cy.get("[href='#example-1-tab-4']").click();
        cy.frameLoaded("#example-1-tab-4 > div > iframe");
        //cy.iframeFindEl('3', "#draggable").then(function($style){
            //$style[0].setAttribute('style', 'position: relative; width: 100px; inset: 68px auto auto 180px; height: 60px;')
          //})
        cy.iframeFindEl("4","#draggable").realMouseDown().realMouseMove(300, 30).realMouseUp(); // 
        cy.iframeFindEl("4","#draggable").should('have.attr', 'style')
        .and('equal', 'position: relative; width: 100px; inset: 0px auto auto 0px; height: 100px;')
        
        cy.iframeFindEl("4","#draggable").realMouseDown().realMouseMove(600, 30).realMouseUp(); // 
        cy.iframeFindEl("4","#draggable").should('have.attr', 'style')
        .and('not.equal', 'position: relative; width: 100px; inset: 0px auto auto 0px; height: 100px;')
        
        // =============================================================================================
        cy.iframeFindEl("4","#draggable2").realMouseDown().realMouseMove(610, 45).realMouseUp();
        cy.iframeFindEl("4","#draggable2").should('have.attr', 'style')
        .and('equal', 'position: relative; width: 100px; inset: 0px auto auto 0px; height: 100px;')
      
        cy.iframeFindEl("4","#draggable2").realMouseDown().realMouseMove(200, 70).realMouseUp();
        cy.iframeFindEl("4","#droppable").should('have.class', "ui-state-highlight")
        cy.iframeFindEl("4","#draggable2").should('have.attr', 'style')
        .and('not.equal', 'position: relative; width: 100px; inset: 0px auto auto 0px; height: 100px;')
        //cy.get().should("not.have.at")

    })

})