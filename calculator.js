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
let num1
let num2
let operation

//Function that calls one of the add, subtract, multiple, or divide functions given three args: two #'s and a operation
const calculation = function(a, b, operator) {  
    if (operator == 'add'){
        return add(a, b)
    }
    else if (operator == 'subtract'){
        return subtract(a, b)
    }
    else if (operator == 'multiply'){
        return multiply(a, b)
    }
    else if (operator == 'divide'){
        return divide(a, b)
    }
}

const buttons = document.querySelectorAll('.input')
const display = document.querySelector('.display')
const equalBtn = document.querySelector('#execute')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if ('0123456789'.includes(button.textContent)){
            display.textContent = display.textContent + button.textContent
        }
        else {
            display.textContent = display.textContent + ' ' + button.textContent + ' '
    }})
})
equalBtn.addEventListener('click', ()=>{
    
})
