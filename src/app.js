import {
  carNameButton,
  carNameInput,
  clickCarNameButton,
  submitCarName,
} from './components/raceCarName.js';
import {
  clickRaceCountButton,
  raceCountButton,
  raceCountInput,
  submitRaceCount,
} from './components/raceCount.js';

export const app = () => {
  carNameInput && carNameInput.addEventListener('keypress', submitCarName);
  carNameButton && carNameButton.addEventListener('click', clickCarNameButton);
  raceCountInput &&
    raceCountInput.addEventListener('keypress', submitRaceCount);
  raceCountButton &&
    raceCountButton.addEventListener('click', clickRaceCountButton);
};
