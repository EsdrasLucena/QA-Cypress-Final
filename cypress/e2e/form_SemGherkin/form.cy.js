/// <reference types="cypress" />

context('Library Login - Validations', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/login')
  })

  it('Test_Form-1 - Login com usuário criado anteriormente', () => {
    cy.get('#userName').type('kaua')
    cy.get('#password').type('Kaua!0910')
    cy.get('#login').click();
  })
it('Test_Form-2 - Login com usuário criado anteriormente e Logout', () => {
    cy.get('#userName').type('kaua')
    cy.get('#password').type('Kaua!0910')
    cy.get('#login').click();
    cy.get('#submit').click();
  })

  it('Test_Form-3 - Fazer login acessar a biblioteca e pesquisar um livro', () => {
    cy.get('#userName').type('kaua')
    cy.get('#password').type('Kaua!0910')
    cy.get('#login').click()
    cy.get('#gotoStore').click();
    cy.get('#searchBox').type('javascript')
    cy.get('.rt-tr.-odd').should('exist').and('be.visible');
  })

 it('Test_Form-4 - Tentativa de Login com usuário e senha inexistentes', () => {
    cy.get('#userName').type('AngeloProf')
    cy.get('#password').type('qaTeste@321')
    cy.get('#login').click()
    cy.get('#name').and('have.text', 'Invalid username or password!').should('be.visible')
  })

 it('Test_Form-5 - submissão sem nenhum campo', () => {
    cy.visit('https://demoqa.com/register')
    cy.get('#register').click()
    cy.get('#firstname').should('have.class', 'is-invalid');
    cy.get('#lastname').should('have.class', 'is-invalid');
    cy.get('#userName').should('have.class', 'is-invalid');
    cy.get('#password').should('have.class', 'is-invalid');

  })

})
