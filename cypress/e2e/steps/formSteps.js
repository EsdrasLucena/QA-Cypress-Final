import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given ('eu acesso a página de login biblioteca', () => {
    cy.visit('https://demoqa.com/login')
})

When('eu preencha o campo username com {string}', (usuario) => {
  cy.get('#userName').type(usuario);
});

When('eu preencha o campo password com {string}', (senha) => {
  cy.get('#password').type(senha);
});

And('eu clique Log in', () => {
    cy.get('#login').click();
})

And('eu clique Log out', () => {
    cy.get('#submit').click();
});

 And ('eu acesso a loja', () => {
    cy.get('#gotoStore').click();
 })
 Then('o acesso seja negado', () => {
    cy.get('#name').should('exist').should('be.visible');
 })

And('eu preencha o campo pesquisar com {string}', (javascript) => {
    cy.get('#searchBox').type(javascript);
})

When('eu clique registrar', () => {
  cy.get('#register').click();
});

Then('o sistema deve exibir os dados preenchidos corretamente', () => {
  cy.get('#output').should('be.visible');
});

Then('o acesso seja negado',() => {
    cy.get('#output').should('be.visible')
})

When ('acessar a página novo usuário', () => {
      cy.visit('https://demoqa.com/register')
})

Then('o sistema deve solicitar que os campos sejam preenchidos', () => {
    cy.get('#firstname').should('have.class', 'is-invalid');
    cy.get('#lastname').should('have.class', 'is-invalid');
    cy.get('#userName').should('have.class', 'is-invalid');
    cy.get('#password').should('have.class', 'is-invalid');
});

