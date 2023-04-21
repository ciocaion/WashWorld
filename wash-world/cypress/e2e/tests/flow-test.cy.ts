export{}
/* 
  The describe-function takes 2 parameters:
  1. An overall description for the set of tests defined inside.
  2. An arrow function containing 1 or more "it-functions"
*/

//* Title or other page content


  describe("Title on pages/or other page content", () => {
    it("Title", () => {
        cy.visit("http://localhost:3000/");
        cy.get('.titleStyle').should('contain.text', 'Select location');
    });
    it("Title", () => {
      cy.visit("http://localhost:3000/products");
      cy.get('.titleStyle').should('contain.text', 'Select product');
      cy.get(':nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
    });
     it("Countdown value", () => {
      cy.visit("http://localhost:3000/start");
      cy.get('.countdown').should('contain.value', '')
    });
}); 

//* Maintenance location


describe("Location with maintenance", () => {
    it("should display maintenance address", () => {
    cy.visit("http://localhost:3000/");
    cy.get('.MuiAlert-message').should('contain.text', `Location Aalborg hovedvej 19 is under maintenance!`);
  });
    it("should have disabled option with data-value 3", () => {
      cy.visit("http://localhost:3000/");
      cy.get("#location-select").click();
      cy.get('[data-value="3"]').should('have.attr', 'aria-disabled', 'true');
    });
  });

//* Button validation

  describe("Buttons validation", () => {
    it("Should validate buttonns", () => {
      cy.visit("http://localhost:3000/");
      cy.get('.nextPage');
    });
    it("Should validate buttonns", () => {
      cy.visit("http://localhost:3000/products");
      cy.get('.nextPage');
    });
    it("Should validate buttonns", () => {
      cy.visit("http://localhost:3000/start");
      cy.get('.nextPage').should('contain.text', 'End')
    });
  });

//* Countdown mock

describe("Mocking the countdown", () => {
  it("Should mock the countdown", () => {
    cy.visit("http://localhost:3000/start");
    cy.get('.countdown');
    cy.clock();
    cy.tick(30000); // change the time as per your requirement in milliseconds
    cy.url().should('include', '/');
  });
});



