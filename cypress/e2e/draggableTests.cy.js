/// <reference types="Cypress" />


describe('Draggable', () => { 

    beforeEach(()=> {
        cy.visit("https://www.way2automation.com/way2auto_jquery/draggable.php#load_box");
        
    })

    it('Draggable first', () => {
        cy.frameLoaded("#example-1-tab-1 > div > iframe");
        cy.iframeFindEl("1","#draggable").should('have.attr', 'style')
        .and('equal', 'position: relative;')
        cy.iframeFindEl("1","#draggable").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 1000, pageY: 400 })
        .trigger('mouseup')
        cy.iframeFindEl("1","#draggable").should('have.attr', 'style')
        .and('not.equal', 'position: relative;')

    })

    it('Draggable upwards/downwards only', () => {
        cy.get("[href='#example-1-tab-2']").click();
        cy.frameLoaded("#example-1-tab-2 > div > iframe");
        cy.iframeFindEl("2","#draggable").should('have.attr', 'style')
        .and('equal', 'position: relative;')
        cy.iframeFindEl("2", "#draggable").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 1000, pageY: 400 })
        .trigger('mouseup')
        cy.iframeFindEl("2", "#draggable").should('have.attr', 'style')
        .and('not.equal', 'position: relative;')
        cy.iframeFindEl("2", "#draggable").should('have.attr', 'style').should("contain", "left: 0px")
    })

    it('Draggable left/right only', () => {
        cy.get("[href='#example-1-tab-2']").click();
        cy.frameLoaded("#example-1-tab-2 > div > iframe");
        cy.iframeFindEl("2","#draggable2").should('have.attr', 'style')
        .and('equal', 'position: relative;')
        cy.iframeFindEl("2", "#draggable2").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 1000, pageY: 400 })
        .trigger('mouseup')
        cy.iframeFindEl("2", "#draggable2").should('have.attr', 'style')
        .and('not.equal', 'position: relative;')
        cy.iframeFindEl("2", "#draggable2").should('have.attr', 'style').should("contain", "top: 0px")
    })

    it('Draggable inside container', () => {
        cy.get("[href='#example-1-tab-2']").click();
        cy.frameLoaded("#example-1-tab-2 > div > iframe");
        cy.iframeFindEl("2","#draggable3").should('have.attr', 'style')
        .and('equal', 'position: relative;')
        cy.iframeFindEl("2", "#draggable3").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 1000, pageY: 400 })
        .trigger('mouseup')
        cy.iframeFindEl("2", "#draggable3").should('have.attr', 'style')
        .and('not.equal', 'position: relative;')
        cy.iframeFindEl("2", "#draggable3").should('have.attr', 'style').should("contain", "inset: 32px")
        cy.iframeFindEl("2", "#draggable3").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 1000, pageY: 0 })
        .trigger('mouseup');
        cy.iframeFindEl("2", "#draggable3").should('have.attr', 'style').should("contain", "inset: 0px")
        
    })

    it('Draggable contained', () => {
        cy.get("[href='#example-1-tab-2']").click();
        cy.frameLoaded("#example-1-tab-2 > div > iframe");
        cy.iframeFindEl("2","#draggable5").should('have.attr', 'style')
        .and('equal', 'position: relative;')
        cy.iframeFindEl("2", "#draggable5").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 1000, pageY: 400 })
        .trigger('mouseup')
        cy.iframeFindEl("2", "#draggable5").should('have.attr', 'style')
        .and('not.equal', 'position: relative;')
        cy.iframeFindEl("2", "#draggable5").should('have.attr', 'style').should("contain", "inset: -16px")
        cy.iframeFindEl("2", "#draggable5").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 1000, pageY: 0 })
        .trigger('mouseup');
        cy.iframeFindEl("2", "#draggable5").should('have.attr', 'style').should("contain", "inset: 0px")
        
    })

    it('Events', () => {
        cy.get("[href='#example-1-tab-4']").click();
        cy.frameLoaded("#example-1-tab-4 > div > iframe");
        cy.iframeFindEl("4","#draggable").should('have.attr', 'style')
        .and('equal', 'position: relative;')
        cy.iframeFindEl("4", "#draggable").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 1000, pageY: 400 })
        .trigger('mouseup')
        cy.iframeFindEl("4", "#event-start > span.count").should('have.text', "1");
        cy.iframeFindEl("4", "#event-stop > span.count").should('have.text', "1");
        cy.iframeFindEl("4", "#draggable").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 1000, pageY: 0 })
        .trigger('mouseup');
        cy.iframeFindEl("4", "#event-start > span.count").should('have.text', "2");
        cy.iframeFindEl("4", "#event-stop > span.count").should('have.text', "2");
        
    })

    it.only('Draggable + Sortable', () => { // TODO
        cy.get("[href='#example-1-tab-5']").click();
        cy.frameLoaded("#example-1-tab-5 > div > iframe");
        //cy.iframeFindEl('5', ".ui-sortable-handle").eq(0).then(function($listItem){
            //$listItem[0].setAttribute('style', 'position:absolute; top:95px;')
          //})
        cy.iframe("#example-1-tab-5 > div > iframe").find(".ui-sortable-handle").eq(0).realMouseDown().realMouseMove(100, 100).realMouseUp();
    
        cy.iframe("#example-1-tab-5 > div > iframe").find(".ui-sortable-handle").eq(2).should('have.text', "Item 1");
        //cy.iframe("#example-1-tab-5 > div > iframe").find(".ui-sortable-handle").eq(0).drag(".ui-sortable-handle").eq(2);
        
    })

    

})