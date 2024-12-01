describe('Session Management', () => {
  it('should redirect to login after session timeout', () => {
    cy.login();
    cy.wait(60000); // Simulate session timeout duration
    cy.visit('/home'); // Attempt to navigate
    cy.url().should('include', '/login'); // Verify redirection
  });
});