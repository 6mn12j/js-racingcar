import { names } from '../support/commands';

describe('CarGame', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
    cy.setCorrectCarName();
    cy.setCorrectCount();
  });
  it('설정한 이름과 자동차 이름이 같아야한다.', () => {
    cy.get('#input-car-name').then((value) => {
      value[0].value
        .split(',')
        .forEach((name, index) => expect(name).to.eq(names[index]));
    });
  });
  //   it('가장 많은 화살표를 가진 플레이어가 우승한다.', () => {
  //     let max = 0;
  //     cy.setCorrectCarName();
  //     cy.setCorrectCount();
  //     cy.get('.div-race-process')
  //       .find('.car')
  //       .then((value) => {
  //         for (const node of value) {
  //         }
  //       });
  //   });

  //   it('생성된 스피너의 갯수와 시도 횟수가 동일해야한다.', () => {});
  //   it('다시 시작 버튼을 누르면 초기화가 일어난다.', () => {});
});
