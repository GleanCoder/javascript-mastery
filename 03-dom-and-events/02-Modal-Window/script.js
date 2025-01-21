'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModalFn() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}

closeModal.addEventListener('click', closeModalFn);
overlay.addEventListener('click', closeModalFn);

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModalFn();
    }
  }
});
