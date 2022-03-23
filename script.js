let displayResult = document.getElementById('display-result');
let confirmResult = document.getElementById('equal-result');
// let number1 = document.getElementsByClassName('number1');
// let number2 = document.getElementsByClassName('number2');

let number = displayResult.textContent;
let calculate = [];
let result = 0;
//let operation = document.getElementsByClassName('operation');


function insert(operation) {
    number += operation;
    showScreen(number)
    // console.log(number)
}
// Aparecer na tela
function showScreen(element) {
    displayResult.innerHTML = element
}


function backspace() {
    // if(displayResult.textContent) {
    let display = document.getElementById('display-result').innerHTML
    console.log("Number: " + number)
    number = display.substring(0, display.length - 1);
    // displayResult.remove()
    showScreen(number)
}
// }

function point() {
    let display = document.getElementById('display-result').innerHTML
    if (display.indexOf('.') < 0) {
        number += '.';
    }
    showScreen(number)
}

function clean() {
    displayResult.innerHTML = ' ';
}

function operator() {


    // let number1Float = parseFloat(number1);
    // let number2Float = parseFloat(number2)

    switch (operation) {
        case '+':            
            return number1Float +=  calculate;
        case '-':
            return number1Float -=  calculate;

        case '*':
            return number1Float *=  calculate;

        case '/':
            return number1Float /=  calculate;
    }


    function confirm() {
        let resultado = operator();

        displayResult.innerText = result;

    }


    // let number2Float = result;
    // let operation = undefined;
    // let number1Float = "";

    // document.getElementById('display-result').innerHTML =  number2Float
    // showScreen(number)

    function operation(valor) {

        console.log(valor);

        if (currentNumber2 === "") return;

        if (currentNumber1 !== "") {
          this.operator();
        }

        this.operation = operation;

        this.currentNumber1 = this.currentNumber2;
        this.currentNumber2 = "";
}
}

















// iniciar calculadora?
// retiar am replace;
// até 9 digitos

