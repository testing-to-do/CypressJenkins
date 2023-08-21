// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("apiLogin", (username, password) => {
    const authBody = `{"username":\"${username}\","password":\"${password}\"}`;
    cy.intercept("**dispatch.php?v=get&r=businessSearchFields").as("businessSearchFields");
    cy.request({
      // to send auth request
      method: "POST",
      url: "https://test.simplyanalytics.net/dispatch.php?v=authenticate&r=institution",
      body: authBody,
      headers: {
        "content-type":
          "application/json",
      },
    }).then((res) => {
      cy.request({
        // to get the cookie after user auth
        method: "GET",
        url: "https://test.simplyanalytics.net/dispatch.php?v=authenticate&r=user",
        headers: { cookie: res.headers["set-cookie"][0] },
        body: {},
      }).then((res) => {
        cy.request({
          method: "GET", // to identify user using the cookie
          url: "https://test.simplyanalytics.net/dispatch.php?v=get&r=user",
          headers: { cookie: res.headers["set-cookie"][0] },
          body: {},
        });
      });
    });
    cy.visit("https://test.simplyanalytics.net/index.html");
  
    cy.wait("@businessSearchFields", { timeout: 60_000 });
    cy.log("We should be able to proceed with the test");
  })

  Cypress.Commands.add("uncaught" , () => {
    Cypress.on('uncaught:exception', (err, runnable) => { // TODO pogledati koji error pravi ovu poruku i staviti ga da vrati false ukoliko je taj exception
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
  })

  Cypress.Commands.add("iframeFindEl", (eqNumber,iElement) => {
    return cy.iframe("#example-1-tab-" + eqNumber + " > div > iframe").find(iElement)
  })

  import 'cypress-iframe';
  import '@4tw/cypress-drag-drop';
  import "cypress-real-events";
  import "cypress-recurse";