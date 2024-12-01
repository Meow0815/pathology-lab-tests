// Valid Calculation
describe('Cost Calculator', () => {
  it('should calculate the cost correctly for selected tests', () => {
    cy.login();
    cy.get('.cost-calculator').click();
    cy.get('input[name="test"]').check(['CBC', 'Lipid Panel']); // Select multiple tests
    cy.get('input[name="discount"]').type('10'); // Apply 10% discount
    cy.get('button.calculate-cost').click();
    cy.contains('Total Cost: $').should('exist'); // Adjust based on the actual result display
  });
});

//Invalid Input
it('should show an error for invalid inputs', () => {
  cy.login();
  cy.get('.cost-calculator').click();
  cy.get('input[name="discount"]').type('-5'); // Enter a negative number
  cy.get('button.calculate-cost').click();
  cy.contains('Invalid input').should('be.visible'); // Adjust based on actual error text
});

//No Selection
it('should show a message when no tests are selected', () => {
  cy.login();
  cy.get('.cost-calculator').click();
  cy.get('button.calculate-cost').click();
  cy.contains('No test selected').should('be.visible');
});

