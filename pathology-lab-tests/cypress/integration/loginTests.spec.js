// Valid Login
describe('Login Functionality', () => {
  it('should log in with valid credentials', () => {
    cy.visit('https://gor-pathology.web.app/');
    cy.get('input[name="username"]').type('test@kennect.io');
    cy.get('input[name="password"]').type('Qwerty@1234');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/home'); // Verify redirection to home page
  });
});

//Invalid Login
it('should show an error for invalid login credentials', () => {
  cy.visit('https://gor-pathology.web.app/');
  cy.get('input[name="username"]').type('invalid@kennect.io');
  cy.get('input[name="password"]').type('wrongpassword');
  cy.get('button[type="submit"]').click();
  cy.contains('Invalid username or password').should('be.visible');
});


//Empty Fields
it('should show validation errors for empty fields', () => {
  cy.visit('https://gor-pathology.web.app/');
  cy.get('button[type="submit"]').click(); // Try to log in without entering credentials
  cy.contains('Field cannot be empty').should('be.visible'); // Adjust based on actual error text
});
