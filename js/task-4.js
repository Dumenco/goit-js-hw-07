let counterValue = 0;
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

function decrement() {
  value.textContent = counterValue -= 1;

};

function increment() {
 value.textContent = counterValue += 1;

};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

