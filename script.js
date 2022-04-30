const letterBox = document.querySelector('#letter-show');

letterBox.addEventListener('click', (event) => {
    console.log(event.target.id)
    let textContent = event.target.textContent;
    console.log(textContent);
    textContent = 'I';
    console.log(textContent);

});