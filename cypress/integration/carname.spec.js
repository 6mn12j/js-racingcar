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

  it('플레이어의 이름이 올바르지 않으면 알림창이 보여진다.', () => {
    cy.get('#input-car-name').type(`${CARNAME_NOT_VALID_ITEM_ONE}{enter}`);
    cy.on('window:alert', (str) => {
      expect(str).to.contain(
        `유효하지 않은 이름의 길이입니다. 자동차의 이름은 1이상, 5자 이하만 가능합니다.`
      );
    });
  });

  it('빈 문자열의 플레이어가 추가되면 알림창이 보여진다.', () => {
    cy.get('#input-car-name').type(`${CARNAME_NOE_VALID_ITEM_TWO}{enter}`);
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        `유효하지 않은 이름의 길이입니다. 자동차의 이름은 1이상, 5자 이하만 가능합니다.`
      );
    });
  });

  it('플레이어 이름이 5자 초과인 경우 알림창이 보여진다.', () => {
    cy.get('#input-car-name').type(
      `${CARNAME_VALID_ITEM_ONE}${CARNAME_NOT_VALID_ITEM_ONE}{enter}`
    );
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        `유효하지 않은 이름의 길이입니다. 자동차의 이름은 1이상, 5자 이하만 가능합니다.`
      );
    });
  });

  it('플레이어 이름이 5자 초과인 경우 알림창이 보여진다.', () => {
    cy.get('#input-car-name')
      .type(`${CARNAME_VALID_ITEM_ONE}`)
      .type(`${CARNAME_NOT_VALID_ITEM_ONE}{enter}`);
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        `유효하지 않은 이름의 길이입니다. 자동차의 이름은 1이상, 5자 이하만 가능합니다.`
      );
    });
  });

  it('올바른 플레이어를 추가하면 하위 컴포넌트가 보여진다.', () => {
    cy.setCorrectCarName();
  });

  it('올바른 플레이어를 추가한 뒤 정수가 아닌 값을 넣는다.', () => {
    cy.setCorrectCarName();
    cy.get('#input-race-count').type(`${COUNT_NOT_VALID_NUM_ONE}{enter}`);
  });
  cy.on('window:alert', (str) => {
    expect(str).contain(`유효하지 않은 횟수입니다.`);
  });
});
