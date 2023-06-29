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

    checkInput(cardName.value, cardNum.value, cvc.value, expDateM.value, expDateY.value);

    
});

//function to check if text is in input box
function checkInput(cardName, value16, value3, dateY2, dateM2) {
    if (
        cardName.trim().length === 0 ||
        value16.length !== 16 ||
        value3.length !== 3 ||
        dateY2.length !== 2 ||
        dateM2.length !== 2) {
        //apply css to make textbox red
        redOn();
        box.style.display = 'block'
    } else {
        hideForm();
        redOff();
    };
}

// function to hide form and button to reset
function hideForm() {
    document.querySelector('.card-form').style.display = 'none';
    document.querySelector('#thankYou').style.display = 'block';
}
    //button
document.querySelector('#reset').addEventListener('click', () => {
    document.querySelector('.card-form').style.display = 'block';
    document.querySelector('#thankYou').style.display = 'none';
    
    cardName.value = '';
    cardNum.value = '';
    expDateM.value = '';
    expDateY.value = '';
    cvc.value = '';
})

//Function to turn boxes red (On & Off)

function redOn() {
        cardName.classList.add('red');
        cardNum.classList.add('red');
        cvc.classList.add('red');
        expDateM.classList.add('red');
        expDateY.classList.add('red');
}

function redOff() {
        cardName.classList.remove('red');
        cardName.classList.remove('red');
        cardNum.classList.remove('red');
        cvc.classList.remove('red');
        expDateM.classList.remove('red');
        expDateY.classList.remove('red');
}

//Functions for all input boxes.
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
        showNum.innerHTML = cardNum.value.replace(/(.{4})/g, '$1 ');
        
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

//function to remove error message box
closeBtn.addEventListener('click', () => {
    if (box.style.display === 'none') {
        box.style.display = 'block'
    } else {
        box.style.display = 'none'
    }
});

// function to how many digit are allow. Used on HTML

function checker(id) {
    if (id.value.length > id.maxLength) {
        id.value = id.value.slice(0, id.maxLength);
    }
}