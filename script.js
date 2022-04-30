function createAlphabet () {
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z'];
    console.log(alphabet);
    return alphabet;
}

function getRandomInt (currentRange) {
    const min = Math.ceil(0);
    const max = Math.floor(currentRange-1);
    return Math.floor(Math.random() * (max - min) + min);
}

function removeFromArray (array, indexToRemove) {
    let usedLetter = array.splice(indexToRemove, 1);
    usedArray.push(usedLetter[0]);
    return usedLetter;
}

function arrayToTextContent (arrayUsed) {
    let stringArray = '';
    for (let i = 0; i < arrayUsed.length; i++) {
        stringArray = stringArray + arrayUsed[i] + ' ';
    }
    return stringArray;
}

const letterBox = document.querySelector('#letter-show');
const startButton = document.querySelector('#start-button');
const resetButton = document.querySelector('#reset-button');
const usedLetters = document.querySelector('#used-letters');

let letterArray = createAlphabet();
let usedArray = [];

startButton.addEventListener('click', (event, currentIndex) => {
    let currentLetter = removeFromArray(letterArray, getRandomInt(letterArray.length));
    letterBox.textContent = currentLetter;
    if (usedArray.length < 26) {
        usedLetters.textContent = arrayToTextContent(usedArray);
    }
});

resetButton.addEventListener('click', (event) => {
    letterArray = createAlphabet();
    usedArray = [];
    usedLetters.textContent = '';
    letterBox.textContent = '';
});

