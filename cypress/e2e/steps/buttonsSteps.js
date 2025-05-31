import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("eu acesso a página de botões", () => {
    cy.visit('https://demoqa.com/buttons')
})

When("eu realizo um duplo clique no botão correspondente", () => {
  cy.get('#doubleClickBtn').dblclick();
});

Then("o sistema deverá exibir a mensagem de sucesso do duplo clique", () => {
  cy.contains("You have done a double click").should("be.visible");
});

When("eu realizo um clique com o botão direito no botão correspondente", () => {
  cy.get('#rightClickBtn').rightclick();
});

Then("o sistema deverá exibir a mensagem de sucesso do clique com botão direito", () => {
  cy.contains("You have done a right click").should("be.visible");
});

When("eu clico no botão de clique simples", () => {
  cy.contains('button', /^Click Me$/).click();
});

Then("o sistema deverá exibir a mensagem de sucesso do clique simples", () => {
  cy.contains("You have done a dynamic click").should("be.visible");
});


When("eu realizo o tipo de clique {string}", (tipo) => {
  if (tipo === "clique") {
    cy.contains('button', /^Click Me$/).click();
  } else if (tipo === "duplo clique") {
    cy.get("#doubleClickBtn").dblclick();
  } else if (tipo === "clique direito") {
    cy.contains("Right Click Me").rightclick();
  } 
});

Then("o sistema deverá exibir a mensagem {string}", (mensagem) => {
  cy.contains(mensagem).should("be.visible");
});

When("eu acesso a página e não realizo nenhuma ação nos botões", () => {
});

Then("o sistema não deverá exibir nenhuma mensagem de sucesso", () => {
  cy.contains("Sucesso").should("not.exist");
});

