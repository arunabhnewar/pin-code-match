function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    // get 4 digit number using condition
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin); 
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

};

// event bubble
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    // condition between not a number/ NaN and number
    if (isNaN(number)) {
        // get response C btn to use condition
        if (number == "C") {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});


function verifyPin() {
    const currentPin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('verification-success');
    const failError = document.getElementById('verification-fail');

    if (currentPin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}