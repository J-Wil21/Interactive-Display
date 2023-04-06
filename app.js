// input data
const cardNum = document.querySelector('#cardNum');
const cardName = document.querySelector('#cardName');
const expDateM = document.querySelector('#expDateM');
const expDateY = document.querySelector('#expDateY');
const cvc = document.querySelector('#cvc');
// output data
const showNum = document.querySelector('#showNum');
const showName = document.querySelector('#showName');
const showExpDate = document.querySelector('#showExpDate');
const showCvc = document.querySelector('#showCvc');

const btn = document.querySelector('#submit')

cardName.addEventListener('input', () => {
    if (cardName.value == " ") {
        showName.innerText = "Full name";
    } else {
        showName.innerHTML = cardName.value;
    }
})