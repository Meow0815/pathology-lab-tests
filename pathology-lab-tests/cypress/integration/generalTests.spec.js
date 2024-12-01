// Session Timeout
describe('Session Management', () => {
  it('should redirect to login after session timeout', () => {
    cy.login();
    cy.wait(60000); // Simulate session timeout duration
    cy.visit('/home'); // Attempt to navigate
    cy.url().should('include', '/login'); // Verify redirection
  });
});

//Responsive Design
it('should display correctly on different screen sizes', () => {
  cy.visit('https://gor-pathology.web.app/');
  cy.viewport(320, 480); // Test mobile view
  cy.get('.responsive-element').should('be.visible');
  cy.viewport(1280, 720); // Test desktop view
  cy.get('.responsive-element').should('be.visible');
});
