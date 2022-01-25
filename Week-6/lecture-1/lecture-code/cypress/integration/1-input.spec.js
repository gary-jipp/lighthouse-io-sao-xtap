/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect */

describe('Input Field Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.input-form input')
      .as('inputField');
  });

  it('find the input field', () => {
    cy.visit('http://localhost:3000');
    cy.get('.input-form input');
  });

  it('can enter text in the input field', () => {
    const text = 'Freddie Mercury';
    cy.get('.input-form input')
      .type(text)
      .should('have.value', text);
  });

  it('can visit text field alias and enter text', () => {

    const text = 'Freddie Mercury';

    cy.get('@inputField')
      .type(text)
      .should('have.value', text);
  });

  it('enter text and backspace', () => {

    const text = 'Freddie Mercury';

    cy.get('@inputField')
      .type('Fredie{backspace}{backspace}die Mercury', {delay:200})
      .should('have.value', text);
  });

});
