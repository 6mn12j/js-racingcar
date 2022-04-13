import { names } from './raceCarName.js';
import { count } from './raceCount.js';

export const raceProcessDiv = document.querySelector('.div-race-process');

const carPlayerTemplate = (name) => {
  return `
  <div class="car mr-2">
  <div class="car-player">${name}</div>
</div>`;
};
export const renderCarPlayer = () => {
  names.forEach((name) => {
    raceProcessDiv.insertAdjacentHTML('beforeend', carPlayerTemplate(name));
  });
};

const forwardTemplate = () => {
  return ` <div class="forward-icon mt-2">⬇️️</div>`;
};

const spinnerTemplate = () => {
  return `<div class="d-flex justify-center mt-3 spinner">
  <div class="relative spinner-container">
    <span class="material spinner"></span>
  </div>
</div>`;
};

const renderGoPlayer = (playerNode) => {
  playerNode.insertAdjacentHTML('beforeend', forwardTemplate());
};

const renderSpinner = (playerNode) => {
  playerNode.insertAdjacentHTML('beforeend', spinnerTemplate());
};

const isSuccess = () => {
  if (Math.random() > 0.5) return 1;
  else return 0;
};
const wait = (timeToDelay) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));

const processGame = async (playerNode) => {
  renderSpinner(playerNode);
  await wait(1000);
  const spinnerDiv = playerNode.querySelector('.spinner');
  spinnerDiv.remove();
  if (isSuccess(playerNode)) renderGoPlayer(playerNode);
};
/*
  랜덤 확률로 갈 수 있다.
  처음에 스피너 -> setTimeout 한다음에 스피너 삭제
*/

const getWinner = (carPlayers) => {
  let max = 0;
  const win = [];
  const players = [];
  for (let carPlayer in carPlayers) {
    //console.dir(carPlayers[carPlayer]);
    players.push({
      player: carPlayers[carPlayer].innerText.split('\n')[0],
      count: carPlayers[carPlayer].childElementCount,
    });
    max =
      carPlayers[carPlayer].childElementCount > max
        ? carPlayers[carPlayer].childElementCount
        : max;
  }
  for (let player in players) {
    if (players[player].count === max) win.push(players[player].player);
  }
  return win;
};

export const startGame = async () => {
  const nodeList = raceProcessDiv.childNodes;
  const carPlayers = Array.prototype.slice
    .call(nodeList)
    .filter((node) => node.className && node.className.includes('car'));
  for (let i = 0; i < count; i++) {
    carPlayers.forEach((playerNode) => {
      processGame(playerNode);
    });
    await wait(1000);
  }
  return getWinner(carPlayers);
};
