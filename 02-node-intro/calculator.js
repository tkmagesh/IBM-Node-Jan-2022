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

var x = 100, y = 200

console.log(calculator.add(100,200))
console.log(calculator.subtract(100,200))
console.log(calculator.multiply(100,200))
console.log(calculator.divide(100,200))
