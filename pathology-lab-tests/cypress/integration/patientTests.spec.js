describe('Patient Management', () => {
  it('should add a new patient', () => {
    cy.login();
    cy.get('button.add-patient').click();
    cy.get('input[name="patientName"]').type('John Doe');
    cy.get('input[name="age"]').type('35');
    cy.get('input[name="contact"]').type('9876543210');
    cy.get('button.submit-patient').click();
    cy.contains('John Doe').should('exist');
  });
});