/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect */

describe('Input Field Tests', () => {

  beforeEach(() => {
    cy.visit('/');

  });

  it('can visit text field alias and enter text', () => {

    cy.get('button#load-friends')
      .click();

    cy.get("li")
      .should('have.length', 5)



  });



});
