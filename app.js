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
let clicked = false;


btn.addEventListener('click', () => {

    checkInput(cardName.value, cardNum.value);
    //checkNum16(cardNum.value);
    //checkNum3(cvc.value);
    // checkNum2(expDateM.value);
    // checkNum2(expDateY.value);
    


    cardName.value = '';
    cardNum.value = '';
    expDateM.value = '';
    expDateY.value = '';
    cvc.value = '';
});

//function to check if text is in input box
function checkInput(text , value) {
    let num16 = /^\d{16}$/; 
    if (cardName.value.trim(text) === '' && !num16.test(value)) {
        //apply css to make textbox red
        cardName.classList.add('red');
        cardNum.classList.add('red');
    } else {
        message.style.display = 'block';
        cardName.classList.remove('red')
    };
}

// function to check if numbers is in the input box
function checkNum16(value) {
    let num16 = /^\d{16}$/;  // Matches exactly 16 digits
    if (num16.test(value)) {
        message.style.display = 'block';
        cardNum.classList.remove('red')
    } else {
        
    }
};
function checkNum3(value) {
    let num3 = /^\d{3}$/;  // Matches exactly 3 digits
    if (num3.test(value)) {
        message.style.display = 'block';
        cardName.classList.remove('red')
    } else {
        classList.add('red');
    }
};
function checkNum2(value) {
    let num2 = /^\d{2}$/;  // Matches exactly 3 digits
    if (num2.test(value)) {
        message.style.display = 'block';
        cardName.classList.remove('red')
    } else {
        classList.add('red');
    }
};

//function to remove succesful message box
closeBtn.addEventListener('click', () => {
    if (message.style.display === 'none') {
        message.style.display = 'block'
    } else {
        message.style.display = 'none'
    }
});

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

// function to how many digit are allow.

function checker(id) {
    if (id.value.length > id.maxLength) {
        id.value = id.value.slice(0, id.maxLength);
    }
}
