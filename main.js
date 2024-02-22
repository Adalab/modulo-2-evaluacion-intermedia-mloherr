'use strict';

const button = document.querySelector('.js-button');
const inputNumber = document.querySelector('.js-inputNumber');
const textClues = document.querySelector('.js-messageClues');
const counter = document.querySelector('.js-counter');

// Generar número aleatorio y recoger valor, sin mostrarlo en pantalla:
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

// Recoger valor input usuaria y compararlo con el valor del numero random

function compareNumbers(input) {
  textClues.innerHTML = '';
  if (input <= 0 || input > 100) {
    textClues.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (input > randomNumber) {
    textClues.innerHTML = 'Demasiado alto';
  } else if (input < randomNumber) {
    textClues.innerHTML = 'Demasiado bajo';
  } else if (input === randomNumber) {
    textClues.innerHTML = '¡Has ganado, campeona!';
  } else {
    textClues.innerHTML = 'Pista: Escribe el número y dale a Prueba';
  }
}

let acc = 0;
const attempsCounter = () =>
  (counter.innerHTML = `Número de intentos: ${(acc += 1)}`);

function handleClick(event) {
  event.preventDefault();
  const userNumber = inputNumber.value;
  const numberValue = parseInt(userNumber);
  compareNumbers(numberValue);
  attempsCounter();
}

button.addEventListener('click', handleClick);
