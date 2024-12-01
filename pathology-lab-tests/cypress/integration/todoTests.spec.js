//Display of To-Do List
describe('To-Do List Functionality', () => {
  it('should display tasks in the To-Do List', () => {
    cy.login();
    cy.get('.todo-list').should('be.visible');
    cy.get('.todo-list-item').should('have.length.greaterThan', 0); // Verify at least one task
  });
});

//Task Addition
it('should add a task to the To-Do list', () => {
  cy.login();
  cy.get('button.add-task').click();
  cy.get('input[name="task"]').type('New Blood Test');
  cy.get('button.submit-task').click();
  cy.contains('New Blood Test').should('exist');
});

//Task Deletion
it('should delete a task from the To-Do list', () => {
  cy.login();
  cy.get('.todo-list-item').first().as('firstTask');
  cy.get('@firstTask').find('button.delete-task').click();
  cy.get('@firstTask').should('not.exist');
});
