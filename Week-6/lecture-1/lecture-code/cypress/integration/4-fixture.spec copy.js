/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect */

describe('Input Field Tests', () => {

  beforeEach(() => {
    
      cy.visit('/')
      .intercept("GET", "**/random_name*", { fixture: "names.json" })
      .as("namesResults");

  });

  it('can visit text field alias and enter text', () => {

    cy.get('button#load-friends')
      .click();

    cy.wait("@namesResults");


  });



});
