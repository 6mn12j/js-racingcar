// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//

export const names = ['EAST', 'WEST', 'SOUTH', 'NORTH'];

Cypress.Commands.add('setCorrectCarName', () => {
  cy.get('#input-car-name').type(`${names.map((name) => name)}{enter}`);
  cy.get('.section-count').should('not.have.value', 'hidden');
});

Cypress.Commands.add('setCorrectCount', () => {
  cy.get('#input-race-count').type(`3{enter}`);
  cy.get('.div-race-process').find('.car').should('have.length', names.length);
});
