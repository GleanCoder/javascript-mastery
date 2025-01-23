'use strict';

// Player--0 Elements
const player0El = document.querySelector('.player--0');
const score0El = document.getElementById('score--0');
const currentScore0 = document.getElementById('current--0');

// Player--1 Elements
const player1El = document.querySelector('.player--1');
const score1El = document.getElementById('score--1');
const currentScore1 = document.getElementById('current--1');

// Buttons Elements

const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// others
const diceEl = document.querySelector('.dice');

// game Init

let curentScore, activePlayer, scores, playing;

function init() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  curentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();

//Switching Player
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  curentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
// Game Logic

// Roll Button
rollBtn.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if (dice !== 1) {
      curentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        curentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold Button

holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += curentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

//New Game Button

newBtn.addEventListener('click', init);
