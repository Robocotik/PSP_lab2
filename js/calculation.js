window.onload = function () {
  let a = '';
  let b = '';
  let expressionResult = '';
  let selectedOperation = null;
  outputElement = document.querySelector('.screen');
  digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]');

  function onDigitButtonClicked(digit) {
    if (!selectedOperation) {
      if (digit != '.' || (digit == '.' && !a.includes(digit)) || a != '0') {
        a += digit;
      }
      outputElement.innerHTML = a || 0;
    } else {
      if (digit != '.' || (digit == '.' && !b.includes(digit)) || b != '0') {
        b += digit;
        outputElement.innerHTML = b || 0;
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
  };

  // кнопка расчёта результата
  document.querySelector('#btn_op_equal').onclick = function () {
    if (a === '' || b === '' || !selectedOperation) return;
    switch (selectedOperation) {
      case 'x':
        expressionResult = +a * +b;
        break;
      case '+':
        expressionResult = +a + +b;
        break;
      case '-':
        expressionResult = +a - +b;
        break;
      case '/':
        expressionResult = +a / +b;
        break;
      case '%':
        expressionResult = +a % +b;
        break;
    }
    a = expressionResult.toString();
    b = '';
    selectedOperation = null;
    outputElement.innerHTML = a;
  };
};
