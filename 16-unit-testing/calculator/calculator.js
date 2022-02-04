function add(x, y) {
    return x + y;
}
function subtract (x, y) {
    return x - y;
}
function multiply  (x,y) {
    return x * y
}
function divide (x,y){
    return x / y
}

var calculator = {add, subtract, multiply, divide}
module.exports = calculator