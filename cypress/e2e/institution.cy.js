/// <reference types="Cypress" />

import { loginInstitution } from "../page_objects/LoginInstitution";
import { signInPage } from "../page_objects/SignInPage";
const data = require("../fixtures/data.json")


describe('Institution tests', () => {

  beforeEach(()=> {
    cy.visit("")
})
  it('Login with valid institution and valid password', () => {
      loginInstitution.enterUsername(data.institutionData.validUsername);
      loginInstitution.enterPassword(data.institutionData.validPassword);
      loginInstitution.clickNextBtn();
      signInPage.checkIfSignInPageLoadedIn();
  })

  it('Login with invalid institution and invalid password', () => {
    loginInstitution.enterUsername(data.institutionData.invalidUsername);
    loginInstitution.enterPassword(data.institutionData.invalidPassword);
    loginInstitution.clickNextBtn();
    loginInstitution.verifyErrorPresence("invalid", data.institutionData.invalidError)
})

it('Login with empty institution and empty password', () => {
  loginInstitution.clickNextBtn();
  loginInstitution.verifyErrorPresence("empty", data.institutionData.emptyError)
})
  
})