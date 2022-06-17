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
    let returnLetter = usedLetter[0];
    return returnLetter;

}

function pickLetter (array, index) {
    let letter = array[index];
    return letter;
}


const letterBox = document.querySelector('#letter-show');
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const resetButton = document.querySelector('#reset-button');
const speedButton = document.querySelector('#speed-button');
const resetSpeed = document.querySelector('#reset-speed')
const usedLetters = document.querySelector('#used-letters');

let letterArray = createAlphabet();
let usedArray = [];
let currentSpeed = 900;
let running = false;
let letterPicker;

startButton.addEventListener('click', (event) => {
    letterPicker = setInterval(() => {
        letterBox.textContent = pickLetter(letterArray, getRandomInt(letterArray.length));
        }, currentSpeed); 
    running = true;
    });



stopButton.addEventListener('click', (event) => {
    if (running) {
    clearInterval(letterPicker);
    letterArray.splice(letterArray.indexOf(letterBox.textContent), 1);    
    //let currentLetter = removeFromArray(letterArray, letterArray.indexOf(letterBox.textContent));
    usedArray.push(letterBox.textContent);
    usedLetters.textContent = usedArray.toString()
}}, false);
resetButton.addEventListener('click', (event) => {
    letterArray = createAlphabet();
    usedArray = [];
    usedLetters.textContent = '';
    letterBox.textContent = '';
});

 speedButton.addEventListener('click', () => {
      currentSpeed = prompt('set speed (less = faster)');
      currentSpeed = Number(currentSpeed);
  });
  
  resetSpeed.addEventListener('click', () => {
      currentSpeed = 900;
  });
