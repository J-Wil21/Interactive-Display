// input data
const cardNum = document.querySelector('#cardNum');
const cardName = document.querySelector('#cardName');
const expDateM = document.querySelector('#expDateM');
const expDateY = document.querySelector('#expDateY');
const cvc = document.querySelector('#cvc');
// output data
const showNum = document.querySelector('#showNum');
const showName = document.querySelector('#showName');
const showExpDateM = document.querySelector('#showExpDateM');
const showExpDateY = document.querySelector('#showExpDateY');
const showCvc = document.querySelector('#showCvc');

const btn = document.querySelector('#btn')

// message
const message = document.querySelector('.hide');
const box = document.getElementById('box')
const closeBtn = document.querySelector('.close-btn')


btn.addEventListener('click', () => {
    if (message.style.display === 'none') {
        message.style.display = 'block'
    } else {
        message.style.display = 'none'
    }
})

closeBtn.addEventListener('click', () => {
    if (message.style.display === 'none') {
        message.style.display = 'block'
    } else {
        message.style.display = 'none'
    }
})


cardName.addEventListener('input', () => {
    if (cardName.value === "") {
        showName.innerText = "Full name";
    } else {
        showName.innerHTML = cardName.value;
    }
});

cardNum.addEventListener('input', () => {
    if (cardNum.value === "") {
        showNum.innerText = "0000 0000 0000 0000";
    } else {
        showNum.innerHTML = cardNum.value;
    }
});

expDateM.addEventListener('input', () => {
    if (expDateM.value === "") {
        showExpDateM.innerText = "00";
    } else {
        showExpDateM.innerHTML = expDateM.value;
    }
});

expDateY.addEventListener('input', () => {
    if (expDateY.value === "") {
        showExpDateY.innerText = "00";
    } else {
        showExpDateY.innerHTML = expDateY.value;
    }
});

cvc.addEventListener('input', () => {
    if (cvc.value === "") {
        showCvc.innerText = "000";
    } else {
        showCvc.innerHTML = cvc.value;
    }
});

