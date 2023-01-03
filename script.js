const body = document.querySelector("body");
const calculator = document.querySelector(".calculator");
const buttons = document.querySelectorAll(".calculator");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const screen = document.querySelector(".screen");

//inputs numbers on screen when clicked
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    return (screen.textContent += number.textContent);
  });
});

//inputs operator on screen when clicked
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    let operatorsArr = ["+", "-", "*", "/"];

    for (let i = 0; i < screen.textContent; i++) {
      for (let j = 0; j < operatorsArr.length; j++) {
        if (screen.textContent[i] === operatorsArr[j]) {
          return;
        } else {
          return (screen.textContent += operator.textContent);
        }
      }
    }
  });
});

//clears the screen
clear.addEventListener('click', () => {
    screen.textContent = '';
});

//takes in two values and an operator and calls a function based on the operator
equal.addEventListener("click", () => {
  let operatorsArr = ["+", "-", "*", "/"];
  let strLength = screen.textContent.length;
  let intArr = [];

  for (let i = 0; i < strLength; i++) {
    for (let j = 0; j < operatorsArr.length; j++) {
      if (screen.textContent[i] == operatorsArr[j]) {
        intArr = screen.textContent.split(operatorsArr[j]);

        if (operatorsArr[j] == "+") {
          sum(intArr[0], intArr[1]);
        } else if (operatorsArr[j] == "-") {
          sub(intArr[0], intArr[1]);
        } else if (operatorsArr[j] == "*") {
          multiply(intArr[0], intArr[1]);
        } else if (operatorsArr[j] == "/") {
          divide(intArr[0], intArr[1]);
        }
      }
    }
  }
});

// operator functions
function sum(a, b) {
  a = parseInt(a);
  b = parseInt(b);

  return (screen.textContent = a + b);
}

function sub(a, b) {
  a = parseInt(a);
  b = parseInt(b);

  return (screen.textContent = a - b);
}

function multiply(a, b) {
  a = parseInt(a);
  b = parseInt(b);

  return (screen.textContent = a * b);
}

function divide(a, b) {
  a = parseInt(a);
  b = parseInt(b);

  return (screen.textContent = a / b);
}
