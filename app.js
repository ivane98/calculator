//functions which perform basic math operations
function add(a, b) {
    return (a + b)
}

function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}
//switch statement which does a colculation by symbol string

function operate(operator, a, b,) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
};

//function which populates the screen with button values
let value = []
window.onload = function () {
    let screen = document.getElementById('input'),
        keypad = document.getElementById('buttons'),
        buttons = keypad.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            screen.value = screen.value + this.innerText;
        };
    }
}
