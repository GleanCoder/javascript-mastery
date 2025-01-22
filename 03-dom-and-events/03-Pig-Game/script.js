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

// Others
const diceEl = document.querySelector('.dice');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
document.querySelectorAll('.score').forEach(score => {
  score.textContent = currentScore;
});
//Game Logic
diceEl.classList.add('hidden');

//Switching Player

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//Rolling the Dice

rollBtn.addEventListener('click', function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    console.log(randomDice);
    diceEl.src = `dice-${randomDice}.png`;
    diceEl.classList.remove('hidden');

    if (randomDice !== 1) {
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold the Score
holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

// New Game or Reset the Game{}
newBtn.addEventListener('click', function () {
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  // scores = [0, 0];
  document.querySelectorAll('.score, .current-score').forEach(score => {
    score.textContent = currentScore;
  });

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
