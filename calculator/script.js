let display = document.getElementById('display');
let currentOperation = '';
let currentValue = '';

function appendValue(value) {
    currentValue += value;
    display.value = currentValue;
}

function performOperation(operator) {
    if (currentValue === '') return;
    currentOperation += currentValue + operator;
    currentValue = '';
    display.value = '';
}

function calculateResult() {
    if (currentValue === '') return;
    currentOperation += currentValue;
    try {
        let result = eval(currentOperation); // Hindari penggunaan eval di aplikasi nyata!
        display.value = result;
        currentOperation = '';
        currentValue = '';
    } catch (error) {
        display.value = 'Error';
        currentOperation = '';
        currentValue = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentOperation = '';
    currentValue = '';
}
