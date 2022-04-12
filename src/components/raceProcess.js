import { names } from './raceCarName.js';

export const raceProcessDiv = document.querySelector('.div-race-process');

const carPlayerTemplate = (name) => {
  return `
	<div class="mr-2">
	<div class="car-player">${name}</div>
  </div>`;
};
export const renderCarPlayer = () => {
  names.forEach((name) => {
    raceProcessDiv.insertAdjacentHTML('beforeend', carPlayerTemplate(name));
  });
};
