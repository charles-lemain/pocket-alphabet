function createAlphabet () {
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z'];
    console.log(alphabet);
    return alphabet;
}

function getRandomInt (currentRange: number) {
    const min = Math.ceil(0);
    const max = Math.floor(currentRange-1);
    return Math.floor(Math.random() * (max - min) + min);
}

function removeFromArray (array: any[], indexToRemove: number) {
    let usedLetter = array.splice(indexToRemove, 1);
    usedArray.push(usedLetter[0]);
    return usedLetter;
}

function arrayToTextContent (arrayUsed: any[]) {
    let stringArray = '';
    for (let i = 0; i < arrayUsed.length; i++) {
        stringArray = stringArray + arrayUsed[i] + ' ';
    }
    return stringArray;
}

const letterBox: Element = document.querySelector('#letter-show');
const startButton: Element = document.querySelector('#start-button');
const resetButton: Element = document.querySelector('#reset-button');
const usedLetters: Element = document.querySelector('#used-letters');

let letterArray = createAlphabet();
let usedArray: any[] = [];

startButton.addEventListener('click', () => {
    let currentLetter = removeFromArray(letterArray, getRandomInt(letterArray.length));
    letterBox.textContent = currentLetter;
    if (usedArray.length < 26) {
        usedLetters.textContent = arrayToTextContent(usedArray);
    }
});

resetButton.addEventListener('click', () => {
    letterArray = createAlphabet();
    usedArray = [];
    usedLetters.textContent = '';
    letterBox.textContent = '';
});

