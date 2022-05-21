"use strict";
function createAlphabet() {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    console.log(alphabet);
    return alphabet;
}
function getRandomInt(currentRange) {
    const min = Math.ceil(0);
    const max = Math.floor(currentRange - 1);
    return Math.floor(Math.random() * (max - min) + min);
}
function removeFromArray(array, indexToRemove) {
    let usedLetter = array[indexToRemove];
    
    usedArray.push(usedLetter[0]);
    return usedLetter;
}
//function arrayToTextContent(arrayUsed) {
    //let stringArray = '';
    //for (let i = 0; i < arrayUsed.length; i++) {
        //stringArray = stringArray + arrayUsed[i] + ' ';
    //}
    //return stringArray;
//}
const pickLetter = () => {
}
const letterBox = document.querySelector('#letter-show');
const startButton = document.querySelector('#start-button');
const resetButton = document.querySelector('#reset-button');
const usedLetters = document.querySelector('#used-letters');
const speedButton = document.querySelector('#speed');
const resetSpeed = document.querySelector('#default-speed');
let letterArray = createAlphabet();
let letterArrayFinal = createAlphabet();
let usedArray = [];
let letterPicker;
let currentSpeed = 900;

startButton.addEventListener('touchstart', () => {
    let letterPicker = setInterval(() => {
        let currentLetter = removeFromArray(letterArray, getRandomInt(letterArray.length));
        letterBox.textContent = currentLetter;

        return currentLetter;
    }, currentSpeed);
    startButton.addEventListener('touchend', () => {
        if (letterPicker != undefined) {
            clearInterval(letterPicker);
        }

});
});
startButton.addEventListener('touchend', () => {
    let index = letterArray.indexOf(letterBox.textContent);
    letterArray = letterArray.splice(index, 1);

    usedLetters.textContent = usedLetters.textContent.concat(letterBox.textContent, ' ');

});

resetButton.addEventListener('click', () => {
    letterArray = createAlphabet();
    usedArray = [];
    usedLetters.textContent = '';
    letterBox.textContent = '';
});
speedButton.addEventListener('click', () => {
    currentSpeed = prompt('Input desired speed of letter refresh (in miliseconds)\ndefault value: 900ms');
    currentSpeed = Number(currentSpeed);
});

resetSpeed.addEventListener('click', () => {
    currentSpeed = 900;
});