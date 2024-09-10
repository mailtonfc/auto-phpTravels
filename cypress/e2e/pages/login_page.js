/// <reference types="cypress" />

import LoginElements from "../elements/login_elements"

const login_elements = new LoginElements
const url = Cypress.config('baseUrl')

class LoginPage {

    acessLogiPage(){
        cy.visit(url);
        cy.wait(3000);
    }

    inputLoginCredentials(username,password){
        cy.get(login_elements.inputEmail()).type(username);
        cy.get(login_elements.inputPassword()).type(password);
    }
    submitLogin(){
        cy.get(login_elements.btnSubmitLogin()).click();
    }

} export default LoginPage
