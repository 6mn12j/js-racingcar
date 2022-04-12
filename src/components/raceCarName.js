import { raceCountSection } from './raceCount.js';

export const raceNameFieldset = document.querySelector('.fieldset-name');
export const carNameInput = document.getElementById('input-car-name');
export const carNameButton = document.getElementById('btn-car-name');
export let names = [];

const check = (name) => {
  name = name.trim();
  if (name.length > 5 || name.length === 0) {
    alert(
      '유효하지 않은 이름의 길이입니다. 자동차의 이름은 1이상, 5자 이하만 가능합니다.'
    );
    return;
  }
  return name;
};

export const handleCarNameInput = (input) => {
  if (names.length > 0) return;
  names = input.value.split(',');
  if (names.filter((name) => check(name)).length !== names.length) return;
  raceNameFieldset.setAttribute('disabled', 'disalbed');
  raceCountSection.classList.remove('hidden');
};

export const submitCarName = (event) => {
  if (event.code === 'Enter') {
    event.preventDefault();
    handleCarNameInput(event.target);
  }
};

export const clickCarNameButton = (event) => {
  const carNameDiv = event.target.parentNode;
  const carNameInput = carNameDiv.childNodes[1];
  handleCarNameInput(carNameInput);
};
