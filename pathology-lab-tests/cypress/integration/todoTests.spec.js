describe('To-Do List Functionality', () => {
  it('should display tasks in the To-Do List', () => {
    cy.login();
    cy.get('.todo-list').should('be.visible');
    cy.get('.todo-list-item').should('have.length.greaterThan', 0); // Verify at least one task
  });
});