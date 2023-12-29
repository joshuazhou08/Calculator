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