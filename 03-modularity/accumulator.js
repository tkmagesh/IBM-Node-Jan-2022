

var result = 0;

function add(x){
    result += x
}

function subtract(x){
    result -= x
}

function multiply(x){
    result *= x
}

function divide(x){
    result /= x
}

function getResult(){
    return result
}

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    getResult: getResult
}