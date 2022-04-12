import { raceCountSection } from './raceCount.js';

export const raceNameFieldset = document.querySelector('.fieldset-name');
export const carNameInput = document.getElementById('input-car-name');
export const carNameButton = document.getElementById('btn-car-name');
export let names = [];

const filterValidValue = (name) => {
  if (name.length > 5 || name.length === 0) return;
  return name;
};

const isValidCarName = () => {
  names = carNameInput.value.split(',').map((name) => name.trim());
  const namesSet = new Set(names);
  if (names.filter((name) => filterValidValue(name)).length !== names.length) {
    alert(
      '유효하지 않은 이름의 길이입니다. 자동차의 이름은 1이상, 5자 이하만 가능합니다.'
    );
    return 0;
  }
  if (namesSet.size !== names.length) {
    alert(
      '중복된 이름이 있습니다. 자동차의 이름은 1이상, 5자 이하만 가능합니다.'
    );
    return 0;
  }
  return 1;
};

export const handleCarNameInput = () => {
  if (!isValidCarName()) return;
  raceNameFieldset.setAttribute('disabled', 'disalbed');
  raceCountSection.classList.remove('hidden');
};

export const submitCarName = (event) => {
  if (event.code === 'Enter' || event.type === 'click') {
    event.preventDefault();
    handleCarNameInput();
  }
};
