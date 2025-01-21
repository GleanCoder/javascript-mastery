'use strict';

let highscore = 0;
let secretNumber;
let score;

function initialValues() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
}
initialValues();

//Game Logic Implimentation
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈To Hight!' : '📉To Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('🥺 You Loose the Game!');
    }
  }
});

// Reset Button Implimentation:

document.querySelector('.again').addEventListener('click', function () {
  initialValues();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';
});
