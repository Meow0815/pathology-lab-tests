describe('Login Functionality', () => {
  it('should log in with valid credentials', () => {
    cy.visit('https://gor-pathology.web.app/');
    cy.get('input[name="username"]').type('test@kennect.io');
    cy.get('input[name="password"]').type('Qwerty@1234');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/home'); // Verify redirection to home page
  });
});