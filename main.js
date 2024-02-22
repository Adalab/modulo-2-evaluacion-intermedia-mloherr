'use strict';

const button = document.querySelector('.js-button');
const inputNumber = document.querySelector('.js-inputNumber');
const textClues = document.querySelector('.js-messageClues');
const counter = document.querySelector('.js-counter');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function changeInnerText(text) {
  textClues.innerHTML = text;
}

function compareNumbers(input) {
  textClues.innerHTML = '';
  if (input <= 0 || input > 100) {
    changeInnerText('El número debe estar entre 1 y 100');
  } else if (input > randomNumber) {
    changeInnerText('Demasiado alto');
  } else if (input < randomNumber) {
    changeInnerText('Demasiado bajo');
  } else {
    changeInnerText('¡Has ganado, campeona!');
  }
}

let counterAccumulator = 0;
const attempsCounter = () =>
  (counter.innerHTML = `Número de intentos: ${(counterAccumulator += 1)}`);

function handleClick(event) {
  event.preventDefault();
  const userNumber = inputNumber.value;
  compareNumbers(userNumber);
  attempsCounter();
}

button.addEventListener('click', handleClick);
