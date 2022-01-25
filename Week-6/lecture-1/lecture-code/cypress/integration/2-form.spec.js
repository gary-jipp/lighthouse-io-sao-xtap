/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect */

describe('Form Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.input-form input')
      .as('inputField');
  });

  it('can visit text field alias and enter text', () => {
    const text = 'Freddie Mercury';
    cy.get('@inputField')
      .type(text)
      .should('have.value', text);
  });

  it('can click the button', () => {
    const text = 'Freddie Mercury';
    cy.get('@inputField')
      .type(text)
      .should('have.value', text);

    cy.get('.input-form button')
      .click();
  });

  it('can click the button and add to list', () => {
    const text = 'Freddie Mercury';
    cy.get('@inputField')
      .type(text)
      .should('have.value', text);

    cy.get('.input-form button')
      .click();

    cy.get('ul')
      .should('contain', text);
  });

  it('can click the button and add item to end of list', () => {
    const text = 'Freddie Mercury';
    cy.get('@inputField')
      .type(text)
      .should('have.value', text);

    cy.get('.input-form button')
      .click();

    cy.get('ul')
      .should('contain', text);

    cy.get('@inputField')
      .type('Betty White')
      .should('have.value', 'Betty White');

    cy.get('.input-form button')
      .click();

    cy.get('li')
      .should('have.length', 2)
      .last()
      .should('contain', 'Betty White');
  });

  it.only('can add two items and delete first', () => {
    const text = 'Freddie Mercury';
    cy.get('@inputField')
      .type(text)
      .should('have.value', text);

    cy.get('.input-form button')
      .click();

    cy.get('ul')
      .should('contain', text);

    cy.get('@inputField')
      .type('Betty White')
      .should('have.value', 'Betty White');

    cy.get('.input-form button')
      .click();

    cy.get('li')
      .should('have.length', 2)
      .last()
      .should('contain', 'Betty White');

    cy.get('li')
      .first()
      .click();

    cy.get('li')
      .should('have.length', 1)
      .first()
      .should('contain', 'Betty White');;




  });

});
