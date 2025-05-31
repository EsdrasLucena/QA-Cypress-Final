import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('que eu acesso a página de formulário Text Box', () => {
  cy.visit('https://demoqa.com/text-box');
});

When('eu preencher o campo nome com {string}', (nome) => {
  cy.get('#userName').type(nome);
});

When('eu preencher o campo email com {string}', (email) => {
  cy.get('#userEmail').type(email);
});

When('eu deixar o campo email vazio', () => {
  cy.get('#userEmail').clear();
});

When('eu preencher o campo endereço atual com {string}', (endereco) => {
  cy.get('#currentAddress').type(endereco);
});

When('eu preencher o campo endereço permanente com {string}', (endereco) => {
  cy.get('#permanentAddress').type(endereco);
});

When('eu preencher o campo endereço atual com um texto muito longo', () => {
  const longText = 'Endereço bastante extenso para teste de limite '.repeat(10);
  cy.get('#currentAddress').type(longText);
});

When('eu preencher o campo endereço permanente com um texto muito longo', () => {
  const longText = 'Endereço extremamente extenso para teste de limite '.repeat(10);
  cy.get('#permanentAddress').type(longText);
});

When('eu clicar em submeter', () => {
  cy.get('#submit').click();
});

Then('o sistema deve exibir os dados preenchidos corretamente', () => {
  cy.get('#output').should('be.visible');
});

Then('o sistema deve exibir os dados, mas o email não deve conter "@"', () => {
  cy.get('#output').should('be.visible');
  cy.get('#userEmail').should('not.contain', '@');
});

Then('o sistema deve exibir o email {string} no resultado', (email) => {
  cy.get('#output').should('be.visible');
  cy.get('#userEmail').should('contain', email);
});

Then('o sistema deve exibir o resultado mesmo sem dados preenchidos', () => {
  cy.get('#output').should('not.be.visible');
  cy.get('#output').should('not.contain.text', 'Name:');
  cy.get('#output').should('not.contain.text', 'Email:');
  cy.get('#output').should('not.contain.text', 'Email:');
  cy.get('#output').should('not.contain.text', 'Email:');
});

Then('o sistema deve exibir o endereço longo no resultado', () => {
  cy.get('#output').should('be.visible');
  cy.get('.border').should('contain', 'Endereço bastante extenso para teste de limite');
});
