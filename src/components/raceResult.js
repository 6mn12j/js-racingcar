import { carNameInput, names, raceNameFieldset } from './raceCarName.js';
import {
  count,
  raceCountFieldset,
  raceCountInput,
  raceCountSection,
} from './raceCount.js';
import { raceProcessDiv } from './raceProcess.js';

const raceResultSection = document.querySelector('.section-race-result');

export const retryGame = () => {
  raceResultSection.innerHTML = '';
  raceProcessDiv.innerHTML = '';
  raceNameFieldset.removeAttribute('disabled');
  raceCountFieldset.removeAttribute('disabled');
  raceCountSection.classList.add('hidden');
  carNameInput.value = '';
  raceCountInput.value = '';
  names.length = 0;
};

const raceResultTemplate = (winner) => {
  return `
	<div>
		<h2>🏆 최종 우승자: ${winner.map((name) => name)} 🏆</h2>
		<div class="d-flex justify-center">
		  <button id="retry-button" type="button" class="btn btn-cyan">다시 시작하기</button>
		</div>
	  </div>`;
};

export const renderResult = (winner) => {
  raceResultSection.insertAdjacentHTML('beforeend', raceResultTemplate(winner));
};
