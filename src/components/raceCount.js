import { addCar } from './raceProcess.js';

export const raceCountSection = document.querySelector('.section-count');
export const raceCountFieldset = document.querySelector('.fieldset-count');
export const raceCountInput = document.getElementById('input-race-count');
export const raceCountButton = document.getElementById('btn-race-count');

const handleRaceCountInput = (input) => {
  const countNumber = parseInt(input.value, 10);
  if (isNaN(countNumber)) {
    alert('유효하지 않은 횟수 입니다. 횟수는 정수만 가능 합니다');
    return;
  }
  if (countNumber) {
    //fieldset disabled하면 내부의 버튼 인풋이 다 disalbed된다
    raceCountFieldset.setAttribute('disabled', 'disalbed');
    raceCountButton.setAttribute('disabled', 'disalbed');
  }
  addCar();
};
export const submitRaceCount = (event) => {
  if (event.code === 'Enter') {
    event.preventDefault();
    handleRaceCountInput(event.target);
  }
};

export const clickRaceCountButton = (event) => {
  const raceCountDiv = event.target.parentNode;
  const raceCountInput = raceCountDiv.childNodes[1];
  handleRaceCountInput(raceCountInput);
};
