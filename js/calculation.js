import {extend} from './extend.js';
import {light} from './light.js';

const fact = n => {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
};

window.onload = function () {
  light();
  extend();
  let a = '';
  let b = '';
  let sequence = '';
  let expressionResult = '';
  let selectedOperation = null;
  const outputElement = document.querySelector('#screen');
  const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]');
  function onDigitButtonClicked(digit) {
    if (a == '0' || b == '0') {
      if (a == '0') {
        a = digit;
        outputElement.innerHTML = a || 0;
      }
      if (b == '0') {
        b = digit;
        outputElement.innerHTML = b || 0;
      }
    } else {
      if (!selectedOperation) {
        if (digit != '.' || (digit == '.' && !a.includes(digit))) {
          a += digit;
        }
        outputElement.innerHTML = a || 0;
      } else {
        if (digit != '.' || (digit == '.' && !b.includes(digit))) {
          b += digit;
          outputElement.innerHTML = b || 0;
        }
      }
    }
  }

  // установка колбек-функций на кнопки циферблата по событию нажатия
  digitButtons.forEach(button => {
    button.onclick = function () {
      const digitValue = button.innerHTML;
      onDigitButtonClicked(digitValue);
      console.log('a:' + a + ';b:' + b + ';res:' + expressionResult);
    };
  });

  // установка колбек-функций для кнопок операций
  document.querySelector('#btn_op_mult').onclick = function () {
    if (a === '') return;
    selectedOperation = 'x';
    console.log(selectedOperation);
  };
  document.querySelector('#btn_op_plus').onclick = function () {
    if (a === '') return;
    selectedOperation = '+';
    console.log(selectedOperation);
  };
  document.querySelector('#btn_op_minus').onclick = function () {
    if (a === '') return;
    selectedOperation = '-';
    console.log(selectedOperation);
  };
  document.querySelector('#btn_op_div').onclick = function () {
    if (a === '') return;
    selectedOperation = '/';
    console.log(selectedOperation);
  };

  document.querySelector('#btn_op_sqrt').onclick = function () {
    if (a === '') return;
    a = Math.sqrt(a);
    expressionResult = a;
    outputElement.innerHTML = a;
  };
  document.querySelector('#btn_op_sqr').onclick = function () {
    if (a === '') return;
    a = a ** 2;
    expressionResult = a;
    outputElement.innerHTML = a;
  };

  document.querySelector('#btn_op_fact').onclick = function () {
    if (a === '') return;
    a = fact(a);
    expressionResult = a;
    outputElement.innerHTML = a;
  };

  document.querySelector('#btn_op_ost').onclick = function () {
    if (a === '') return;
    selectedOperation = '%';
    console.log(selectedOperation);
  };

  document.querySelector('#btn_op_minus_plus').onclick = function () {
    if (a === '') return;
    selectedOperation = selectedOperation == '+' ? '-' : '+';
  };

  // кнопка очищения
  document.querySelector('#btn_op_clear').onclick = function () {
    a = '';
    b = '';
    selectedOperation = null; // Изменено на null
    expressionResult = '';
    console.log(selectedOperation);
    outputElement.innerHTML = 0;
  };

  document.querySelector('#btn_op_back').onclick = function () {
    if (b == '') {
      a = a.length > 1 ? a.slice(0, a.length - 1) : 0;
      outputElement.innerHTML = a;
    } else {
      b = b.length > 1 ? b.slice(0, b.length - 1) : 0;
      outputElement.innerHTML = b;
    }
    console.log('a:' + a + ';b:' + b + ';res:' + expressionResult);
  };

  // кнопка расчёта результата
  document.querySelector('#btn_op_equal').onclick = function () {
    console.log(sequence, a, b, expressionResult);
    if (selectedOperation == null && b == '' && sequence != '') {
      expressionResult = +a + +sequence;
      a = expressionResult;
      outputElement.innerHTML = a;
      return;
    }
    if (a === '' || b === '' || !selectedOperation) return;
    switch (selectedOperation) {
      case 'x':
        expressionResult = +a * +b;
        sequence = '';
        break;
      case '+':
        expressionResult = +a + +b;
        sequence = '+' + b;
        break;
      case '-':
        expressionResult = +a - +b;
        sequence = '-' + b;
        break;
      case '/':
        expressionResult = +a / +b;
        sequence = '';
        break;
      case '%':
        expressionResult = +a % +b;
        sequence = '';
        break;
    }
    a = expressionResult.toString();
    b = '';
    selectedOperation = null;
    outputElement.innerHTML = a;
  };
};
