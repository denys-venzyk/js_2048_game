'use strict';

// Uncomment the next lines to use your game instance in the browser
const Game = require('../modules/Game.class');
const game = new Game();

const scoreEl = document.querySelector('.game-score');
const startButton = document.querySelector('.button.start');
const winMessage = document.querySelector('.message-start');
const loseMessage = document.querySelector('.message-lose');
const startMessage = document.querySelector('.message-start');
const fieldRows = document.querySelector('.field-row');

let hasMoved = false;

function setButtonToRestart() {
  startButton.textContent = 'Restart';
  startButton.classList.remove('start');
  startButton.classList.add('restart');
}

function setButtonToStart() {
  startButton.textContent = 'Start';
  startButton.classList.remove('restart');
  startButton.classList.add('start');
}

const CELL_BASE_CLASS = 'field-cell';


