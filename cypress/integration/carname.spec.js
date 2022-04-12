// carname.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('CarRace', () => {
  const CARNAME_VALID_ITEM_ONE = 'EAST';
  const CARNAME_VALID_ITEM_TWO = 'WEST';
  const CARNAME_NOT_VALID_ITEM_ONE = 'WESTTT';
  const CARNAME_NOE_VALID_ITEM_TWO = ' ';

  const COUNT_VALID_NUM_ONE = 5;
  const COUNT_NOT_VALID_NUM_ONE = '-';
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });
  it('올바른 플레이어 이름을 하나 추가한다.', () => {
    cy.get('#input-car-name').type(`${CARNAME_VALID_ITEM_ONE}{enter}`);
    cy.get('#input-race-count').type(`${COUNT_VALID_NUM_ONE}{enter}`);
    // cy.get('.div-race-process div').should('have.length', 1);
  });
  it('올바르지 않은 길이의 플레이어 한명을 추가한다.', () => {
    cy.get('#input-car-name').type(`${CARNAME_NOT_VALID_ITEM_ONE}{enter}`);
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        `유효하지 않은 이름의 길이입니다. 자동차의 이름은 1이상, 5자 이하만 가능합니다.`
      );
    });
  });
  it('빈 문자열의 플레이어 한명을 추가한다', () => {
    cy.get('#input-car-name').type(`${CARNAME_NOE_VALID_ITEM_TWO}{enter}`);

    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        `유효하지 않은 이름의 길이입니다. 자동차의 이름은 1이상, 5자 이하만 가능합니다.`
      );
    });
  });
  it('올바르지 않은 플레이어와 올바른 플레이어 두명을 추가한다.', () => {
    cy.get('#input-car-name')
      .type(`${CARNAME_VALID_ITEM_ONE}`)
      .type(`${CARNAME_NOT_VALID_ITEM_ONE}{enter}`);
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        `유효하지 않은 이름의 길이입니다. 자동차의 이름은 1이상, 5자 이하만 가능합니다.`
      );
    });
  });
  it('올바른 플레이어를 추가한 후 올바르지 않은 횟수를 추가한다.', () => {
    cy.get('#input-car-name')
      .type(`${CARNAME_VALID_ITEM_ONE},`)
      .type(`${CARNAME_VALID_ITEM_TWO}{enter}`);
    cy.get('#input-race-count').type(`${COUNT_NOT_VALID_NUM_ONE}{enter}`);
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        `유효하지 않은 횟수 입니다. 횟수는 정수만 가능 합니다`
      );
    });
  });
});
