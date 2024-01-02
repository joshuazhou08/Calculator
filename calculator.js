//Functions to add, subtract, multiply, and divide
const add = function(a, b) {
    const numA = parseFloat(a)
    const numB = parseFloat(b)
    return numA + numB
}

const subtract = function(a,b){
    const numA = parseFloat(a)
    const numB = parseFloat(b)
    return numA - numB
}

const multiply = function(a,b) {
    const numA = parseFloat(a)
    const numB = parseFloat(b)
    return numA * numB
}

const divide = function(a,b){
    const numA = parseFloat(a)
    const numB = parseFloat(b)
    if (numB == 0) {
        return 'Infinity'
    }
    return numA / numB
}

//Visual effects
let buttonColor
function mouseEnter(){
    buttonColor = this.style.backgroundColor
    this.style.backgroundColor = 'rgb(189, 189, 189)'
}
function mouseLeave(){
    this.style.backgroundColor = buttonColor
}
const allButtons = document.querySelectorAll('button')
allButtons.forEach((button)=>{
    button.addEventListener('mouseenter', mouseEnter)
    button.addEventListener('mouseleave', mouseLeave)
})

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
    else if (operator == '÷'){
        return divide(a, b)
    }
}

const buttons = document.querySelectorAll('.input')
const display = document.querySelector('.display')
const equalBtn = document.querySelector('#execute')
const displayHistory = document.querySelector('.display-history')
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
        //Handling the operator buttons
        else {
            if (!operation && num1){
                operation = button.textContent
                //Highlight the button to indicate which operation the user is on
                button.style.backgroundColor = 'rgb(130, 68, 68)'
                button.removeEventListener('mouseleave', mouseLeave)
                currOperatingBtn = button

            }   
    }})
})
equalBtn.addEventListener('click', ()=>{
    if (num1 && num2 && operation){
        equalBtn.style.backgroundColor = 'rgb(189, 189, 189)'
        let result = calculation(num1, num2, operation)
        //Round the result if it is too long
        if (result.toString().length > 6){
            result = result.toFixed(4)
        }
        displayHistory.textContent = num1 + operation + num2 + '='
        display.textContent = result
        operation = undefined;
        num1 = result
        num2 = 0
        //Unhighlight the current operator the user is working with
        currOperatingBtn.style.backgroundColor = 'white'
        currOperatingBtn.addEventListener('mouseenter', mouseEnter)
        currOperatingBtn.addEventListener('mouseleave', mouseLeave)
        equalBtn.style.backgroundColor = 'white'
    }
})
//Clear Button
const clearBtn = document.querySelector('#clear-btn')
clearBtn.addEventListener('click', ()=>{
    display.textContent = ''
    displayHistory.textContent = ''
    num1 = 0
    num2 = 0
    operation = undefined
    currOperatingBtn.style.backgroundColor = 'white';
    currOperatingBtn.addEventListener('mouseleave', mouseLeave)
})

//Decimal Button
const decimalBtn = document.querySelector('#decimal')
decimalBtn.addEventListener('click',()=>{
    //Checking if we are working on num1 or num2
    if (!operation){
        if (!num1.toString().includes('.')){
            display.textContent = display.textContent + decimalBtn.textContent
            num1 = display.textContent
        }
    }
}
)