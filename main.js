'use strict';

const button = document.querySelector('.js-button');
const inputNumber = document.querySelector('.js-inputNumber');
const textClues = document.querySelector('.js-messageClues');
const counter = document.querySelector('.js-counter');
const buttonRestart = document.querySelector('.js-restartButton');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);
console.log(randomNumber);

function changeInnerText(text) {
  textClues.innerHTML = '';
  textClues.innerHTML = text;
}

function compareNumbers(input) {
  if (input < 1 || input > 100) {
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
const attempsCounter = () => {
  counter.innerHTML = `Número de intentos: ${(counterAccumulator += 1)}`;
};

function handleClick(event) {
  event.preventDefault();
  const userNumber = parseInt(inputNumber.value);
  compareNumbers(userNumber);
  attempsCounter();
}

button.addEventListener('click', handleClick);

const handleReset = () => {
  counter.innerHTML = `Número de intentos: 0`;
  textClues.innerHTML = ` Pista: Escribe el número y dale a Prueba`;
  inputNumber.value = inputNumber.defaultValue;
  randomNumber = getRandomNumber(100);
  console.log(randomNumber);
};

buttonRestart.addEventListener('click', handleReset);
