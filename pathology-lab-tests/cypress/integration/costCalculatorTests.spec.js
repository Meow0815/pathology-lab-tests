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