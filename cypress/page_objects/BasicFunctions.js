class BasicFunctions {


monthPickerByName(nameSelector, selector, name){
    cy.log("AAAA")
    cy.pause();
    cy.task('checkDate').then(selector.invoke('text'),(d) => {
        if(!d.includes(name)){
            selector.click();
            return false;
        }
    })
}

}

export const basicFunctions = new BasicFunctions()