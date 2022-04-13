import { renderCarPlayer, startGame } from './raceProcess.js';
import { renderResult, retryGame } from './raceResult.js';

export const raceCountSection = document.querySelector('.section-count');
export const raceCountFieldset = document.querySelector('.fieldset-count');
export const raceCountInput = document.getElementById('input-race-count');
export const raceCountButton = document.getElementById('btn-race-count');
export let count = 0;

const handleRaceCountInput = () => {
  const countNumber = parseInt(raceCountInput.value, 10);
  if (isNaN(countNumber)) {
    alert('유효하지 않은 횟수 입니다. 횟수는 정수만 가능 합니다');
    return;
  }
  if (countNumber) raceCountFieldset.setAttribute('disabled', 'disalbed');
  return countNumber;
};

export const submitRaceCount = async (event) => {
  if (event.code === 'Enter' || event.type === 'click') {
    event.preventDefault();
    count = handleRaceCountInput();
    renderCarPlayer();
    const winner = await startGame();
    await renderResult(winner);
    window.alert('축하합니다');
    const retryButton = document.querySelector('#retry-button');
    retryButton && retryButton.addEventListener('click', retryGame);
  }
};
