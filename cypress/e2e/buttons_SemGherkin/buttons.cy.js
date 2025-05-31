context('Buttons - Validação', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/buttons');
  });

  it('Deve exibir mensagem de sucesso ao realizar duplo clique', () => {
    cy.get('#doubleClickBtn').dblclick();
    cy.contains('You have done a double click').should('be.visible');
  });

  it('Deve exibir mensagem de sucesso ao realizar clique com botão direito', () => {
    cy.get('#rightClickBtn').rightclick();
    cy.contains('You have done a right click').should('be.visible');
  });

  it('Deve exibir mensagem de sucesso ao clicar no botão de clique simples', () => {
    cy.contains('button', /^Click Me$/).click();
    cy.contains('You have done a dynamic click').should('be.visible');
  });

  it('Deve exibir a mensagem correta ao realizar diferentes tipos de clique', () => {
    const cliques = [
      { tipo: 'clique', mensagem: 'You have done a dynamic click' },
      { tipo: 'duplo clique', mensagem: 'You have done a double click' },
      { tipo: 'clique direito', mensagem: 'You have done a right click' }
    ];

    cliques.forEach(({ tipo, mensagem }) => {
      cy.visit('https://demoqa.com/buttons');

      if (tipo === 'clique') {
        cy.contains('button', /^Click Me$/).click();
      } else if (tipo === 'duplo clique') {
        cy.get('#doubleClickBtn').dblclick();
      } else if (tipo === 'clique direito') {
        cy.get('#rightClickBtn').rightclick();
      }

      cy.contains(mensagem).should('be.visible');
    });
  });

  it('Não deve exibir nenhuma mensagem de sucesso sem interações', () => {
    cy.contains('You have done a double click').should('not.exist');
    cy.contains('You have done a right click').should('not.exist');
    cy.contains('You have done a dynamic click').should('not.exist');
  });



})