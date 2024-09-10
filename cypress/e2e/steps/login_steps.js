/// <reference types="cypress" />

import LoginPage from "../pages/login_page";
const loginPage = new LoginPage


Given(/^eu acesso a pagina home da aplicação$/, () => {
	loginPage.acessLogiPage();
});

When(/^eu inserir meu username "([^"]*)" e minha senha "([^"]*)"$/, (username, password) => {
	loginPage.inputLoginCredentials(username, password)
});

When(/^clicar no botão entrar$/, () => {
	loginPage.submitLogin()
});

Then(/^tenho acesso "([^"]*)"$/, (message) => {
	console.log(message);
    cy.contains('Dashboard')
});