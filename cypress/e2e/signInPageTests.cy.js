/// <reference types="Cypress" />

import { loginInstitution } from "../page_objects/LoginInstitution";
import { signInPage } from "../page_objects/SignInPage";
const data = require("../fixtures/data.json")


describe('Sign in page tests', () => {

  beforeEach(()=> {
    cy.visit("")
    loginInstitution.enterUsername(data.institutionData.validUsername);
    loginInstitution.enterPassword(data.institutionData.validPassword);
    loginInstitution.clickNextBtn();
    signInPage.checkIfSignInPageLoadedIn()
})
  it('Sign in with invalid email', () => {
      signInPage.enterEmail(data.signInPage.invalidEmail);
      signInPage.enterPassword(data.signInPage.validPassword);
      signInPage.clickSignInBtn();
      signInPage.verifyErrorPresence("invalid", data.signInPage.invalidError)
  })

  it('Sign in with invalid password', () => {
    signInPage.enterEmail(data.signInPage.validEmail);
    signInPage.enterPassword(data.signInPage.invalidPassword);
    signInPage.clickSignInBtn();
    signInPage.verifyErrorPresence("invalid", data.signInPage.invalidError)
})

it('Sign in with empty email and empty password', () => {
    signInPage.clickSignInBtn();
    signInPage.verifyErrorPresence("empty", data.signInPage.emptyError)
})
  
})