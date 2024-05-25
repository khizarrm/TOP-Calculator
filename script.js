/*
Calc has number, operator, and another number.
Set global variables for each of the above 
1. Function called operate
    takes in an operator and 2 numbers
    sets the variables to the ones passed in by parameter
*/

let numberOne = 0;
let operator = "+";
let numberTwo = 0;
let displayValue = "";
let calculated = false; 

const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    if (button.className != "equal" && button.className != "clear"){
        button.addEventListener("click", () =>{
            if (calculated == true){
                displayValue = "";
                calculated = false;
            }
            updateDisplay(button.className)
        })
    }
})


const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    displayValue = "";
    display.innerHTML = "";
})

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    console.log(displayValue);
    let operator = "";
    for (let i = 0; i < displayValue.length; i++){
        switch(displayValue[i]){
            case "+":
                operator = "+";
                break;
            case "-":
                operator = "-";
                break;
            case "/":
                operator = "/";
                break;
            case "*":
                operator = "*";
                break;
        }
    }
    let arr = displayValue.split(operator);
    console.log(arr);
    let res = operate(arr[0], operator, arr[1]);
    displayValue = ""
    calculated = true; 
    updateDisplay(res);
})

function updateDisplay(n){
    displayValue += n; 
    display.innerHTML = displayValue;
}

const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

function operate(n1, op, n2){
    numberOne = n1;
    numberTwo = n2;
    operator = op;
    return operators[op](n1, n2);
}



