'use strict'
const mainFunction = (callback) => {
    const number1 = +prompt('Your first number')
    const number2 = +prompt('Your second number')
    return callback(number1,number2)
}

const exponentiation = (a,b) => {
    const result = a ** b
    return result
}
const multiply = (a,b) => {
    const result2 = a * b
    return result2
}
const division = (a,b) => {
    const result3 = a / b
    return result3
}
const modulo = (a,b) => {
    const result4 = a % b
    return result4
}

console.log(mainFunction(exponentiation));
console.log(mainFunction(multiply));
console.log(mainFunction(division));
console.log(mainFunction(modulo));

