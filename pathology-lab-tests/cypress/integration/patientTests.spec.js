//Add Patient Details
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

//Create Test Request
it('should create a test request for a patient', () => {
  cy.login();
  cy.get('button.add-test').click();
  cy.get('select[name="patient"]').select('John Doe'); // Select existing patient
  cy.get('input[name="testType"]').type('Blood Test');
  cy.get('button.submit-test').click();
  cy.contains('Blood Test for John Doe').should('exist');
});

//Mandatory Fields Validation
it('should validate mandatory fields in the patient form', () => {
  cy.login();
  cy.get('button.add-patient').click();
  cy.get('button.submit-patient').click(); // Attempt to submit without entering details
  cy.contains('This field is required').should('be.visible');
});
