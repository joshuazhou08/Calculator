//Functions to add, subtract, multiply, and divide
const add = function(a, b) {
    const numA = parseInt(a)
    const numB = parseInt(b)
    return numA + numB
}

const subtract = function(a,b){
    const numA = parseInt(a)
    const numB = parseInt(b)
    return numA - numB
}

const multiply = function(a,b) {
    const numA = parseInt(a)
    const numB = parseInt(b)
    return numA * numB
}

const divide = function(a,b){
    const numA = parseInt(a)
    const numB = parseInt(b)
    if (numB == 0) {
        return 'Infinity'
    }
    return numA / numB
}

//Initialize variables containing the two numbers to be operated on and the operator
let num1 = 0
let num2 = 0
let operation

//Function that calls one of the add, subtract, multiple, or divide functions given three args: two #'s and a operation
const calculation = function(a, b, operator) {  
    if (operator == '+'){
        return add(a, b)
    }
    else if (operator == '-'){
        return subtract(a, b)
    }
    else if (operator == 'x'){
        return multiply(a, b)
    }
    else if (operator == '/'){
        return divide(a, b)
    }
}

const buttons = document.querySelectorAll('.input')
const display = document.querySelector('.display')
const equalBtn = document.querySelector('#execute')
const displayHistory = document.querySelector('.display-history')
let displayText = display.textContent
let currOperatingBtn
//Updating display
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if ('0123456789'.includes(button.textContent)){
            if (!operation) {
                display.textContent = display.textContent + button.textContent
                num1 = display.textContent
            }
            else{
                display.textContent = ''
                display.textContent = display.textContent + button.textContent
                num2 = display.textContent
            }
        }
        else {
            if (!operation){
                operation = button.textContent
                button.style.backgroundColor = 'rgb(130, 68, 68)'
                currOperatingBtn = button
            }
            else {
                let clickEvent = new Event('click');
                equalBtn.dispatchEvent(clickEvent);
            }    
        displayText = display.textContent
    }})
})
equalBtn.addEventListener('click', ()=>{
    if (num1 && num2 && operation){
        equalBtn.style.backgroundColor = 'rgb(189, 189, 189)'
        const result = calculation(num1, num2, operation)
        displayHistory.textContent = num1 + operation + num2 + '='
        display.textContent = result
        operation = undefined;
        num1 = result
        num2 = 0
        currOperatingBtn.style.backgroundColor = 'white';
        equalBtn.style.backgroundColor = 'white'
    }
})
