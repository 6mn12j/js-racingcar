import {
  carNameButton,
  carNameInput,
  submitCarName,
} from './components/raceCarName.js';
import {
  raceCountButton,
  raceCountInput,
  submitRaceCount,
} from './components/raceCount.js';

export const app = () => {
  carNameInput && carNameInput.addEventListener('keypress', submitCarName);
  carNameButton && carNameButton.addEventListener('click', submitCarName);
  raceCountInput &&
    raceCountInput.addEventListener('keypress', submitRaceCount);
  raceCountButton && raceCountButton.addEventListener('click', submitRaceCount);
};
