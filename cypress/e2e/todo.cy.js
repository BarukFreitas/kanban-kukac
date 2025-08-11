describe('Quadro To Do', () => {

  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
  })

  it('Deve abrir uma tarefa com sucesso', () => {
    cy.get(':nth-child(1) > .board-cards > :nth-child(1)').click();
  })

  it('Deve editar o nome de uma tarefa com sucesso', () => {
    cy.get(':nth-child(1) > .board-cards > :nth-child(1)').click();

    cy.contains('.custom-input p', 'Documentar padrões mobile').should('be.visible').click({ force: true });

    cy.get('.sc-gsnTZi').type('Documento editado 1');
    cy.get('.btn').click();
  })

  it('Deve adicionar uma nova tag com sucesso', () => {
    cy.get(':nth-child(1) > .board-cards > :nth-child(1)').click();
    
    cy.contains('section .custom-input p', 'Adicionar nova Tag').should('be.visible').click({ force: true });

    cy.get('.sc-gsnTZi').type('Nova tag 1');

    cy.get('.btn').click();

  })

    it('Deve adicionar uma nova tag com cor roxa com sucesso', () => {
    cy.get(':nth-child(1) > .board-cards > :nth-child(1)').click();

    cy.get('#\\31 Color').click();

    cy.contains('section .custom-input p', 'Adicionar nova Tag').should('be.visible').click({ force: true });

    cy.get('.sc-gsnTZi').type('Nova tag 1');

    cy.get('.btn').click();

  })

    it('Deve excluir board To Do com sucesso', () => {
      cy.get('#📝\ \ To\ Dotrash').click()

  })

})