/* 
var calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
    multiply : function (x,y) {
        return x * y
    },
    divide : function(x,y){
        return x / y
    }
}

module.exports = calculator;
 */

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

module.exports.add = add
module.exports.subtract = subtract
module.exports.multiply = multiply
module.exports.divide = divide