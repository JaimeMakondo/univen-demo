const display = document.getElementById('display');

// Off button and on
let currentstate = 'off';
let currentnumber = '';
let previousnumber = '';
let operation = null;

function turnon() {
  currentstate = 'on';
  display.value = 0;
}

function turnoff() {
  currentstate = 'off';
  display.value = '';
  currentnumber = '';
  previousnumber = '';
  operation = null;
}

function clearDisplay() {
  currentstate = 'off';
  display.value = '0';
  currentnumber = '';
  previousnumber = '';
  operation = null;
}

function erase() {
  if (currentnumber !== '') {
    currentnumber = currentnumber.slice(0, -1);
    display.value = currentnumber;
  }
}

function appendnumber(number) {
  if (currentstate === 'on') {
    if (currentnumber === '0' && number === '0') {
      return;
    }
    if (currentnumber === '0' && number !== '0') {
      currentnumber = number;
    } else {
      currentnumber += number;
    }
    display.value = currentnumber;
  }
}

function appenddecimal() {
  if (currentstate === 'on' && !currentnumber.includes('.')) {
    currentnumber += '.';
    display.value = currentnumber;
  }
}

function setoperation(op) {
  if (currentstate === 'on' && currentnumber !== '') {
    previousnumber = currentnumber;
    currentnumber = '';
    operation = op;
  }
}

function calculate() {
  if (currentstate === 'on' && previousnumber !== '' && currentnumber !== '') {
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(previousnumber) + parseFloat(currentnumber);
        break;
      case '-':
        result = parseFloat(previousnumber) - parseFloat(currentnumber);
        break;
      case '*':
        result = parseFloat(previousnumber) * parseFloat(currentnumber);
        break;
      case '/':
        result = parseFloat(previousnumber) / parseFloat(currentnumber);
        break;
      default:
        return;
    }
    display.value = result.toString();
    currentnumber = result.toString();
    previousnumber = '';
    operation = null;
  }
}

// Getting user inputs

document.getElementById('on').addEventListener('click', turnon);
document.getElementById('off').addEventListener('click', turnoff);
document.getElementById('AC').addEventListener('click', clearDisplay);
document.getElementById('erase').addEventListener('click', erase);
document.getElementById('seven').addEventListener('click', () => appendnumber('7'));
document.getElementById('eight').addEventListener('click', () => appendnumber('8'));
document.getElementById('nine').addEventListener('click', () => appendnumber('9'));
document.getElementById('six').addEventListener('click', () => appendnumber('6'));

document.getElementById('five').addEventListener('click', () => appendnumber('5'));
document.getElementById('four').addEventListener('click', () => appendnumber('4'));
document.getElementById('three').addEventListener('click', () => appendnumber('3'));
document.getElementById('two').addEventListener('click', () => appendnumber('2'));
document.getElementById('one').addEventListener('click', () => appendnumber('1'));
document.getElementById('zero').addEventListener('click', () => appendnumber('0'));
document.getElementById('comma').addEventListener('click', appenddecimal);
document.getElementById('equal').addEventListener('click', calculate);
document.getElementById('add').addEventListener('click', () => setoperation('+'));
document.getElementById('substraction').addEventListener('click', () => setoperation('-'));
document.getElementById('multiply').addEventListener('click', () => setoperation('*'));
document.getElementById('devide').addEventListener('click', () => setoperation('/'));