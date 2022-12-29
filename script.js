const body = document.querySelector("body");
const calculator = document.querySelector(".calculator");
const buttons = document.querySelectorAll(".calculator");
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const screen = document.querySelector('.screen');

numbers.forEach(number => {
    number.addEventListener('click', e => {
        return screen.textContent += number.textContent;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        let operatorsArr = ['+', '-', '*', '/'];

        for(let i = 0; i < screen.textContent; i++) {
            for(let j = 0; j < operatorsArr.length; j++) {
                if(screen.textContent[i] === operatorsArr[j]) {
                    return;
                } else {
                    return screen.textContent += operator.textContent;
                }
            }
        }
    });
});




