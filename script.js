'use strict';
let dicenumber;
let sum = 0;
let playing = true;
const rolldice = document.querySelector('.btn--roll');
const image = document.querySelector('.dice');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let active_score = document.querySelector('.player--active .score');
let swap = function () {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
};
let check_Winner = function () {
  if (
    Number(document.querySelector('.player--active .score').textContent) >= 20
  ) {
    document.querySelector('.player--active').classList.add('player--winner');
    playing = false;
    document.querySelector('.dice').classList.add('hidden');
  }
};

rolldice.addEventListener('click', function () {
  if (playing) {
    dicenumber = Math.round(Math.random() * 6);
    if (dicenumber === 0) {
      dicenumber = 5;
    }
    image.setAttribute('src', `dice-${dicenumber}.png`);
    sum += dicenumber;
    if (dicenumber === 1) {
      sum = 0;
      active_score.textContent = Number(active_score.textContent) + sum;
      document.querySelector('.player--active .current-score').textContent =
        sum;
      console.log(check_Winner());
      swap();
      return;
    } else {
      document.querySelector('.player--active .current-score').textContent =
        sum;
    }
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    document.querySelector('.player--active .score').textContent =
      Number(document.querySelector('.player--active .score').textContent) +
      sum;
    console.log(check_Winner());
    sum = 0;
    document.querySelector('.player--active .current-score').textContent = sum;
    swap();
  }
});
document.querySelector('.btn--new').addEventListener('click', function () {
  document.location.reload();
});
