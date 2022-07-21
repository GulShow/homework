'use strict'
const padStr = (str, length, symbol, boolean = true) => {
    let result = ""
    if (typeof str !== 'string') throw new Error('This isn\'t a string');
    if (typeof length !== 'number') throw new Error('This isn\'t a number');

    if (symbol.length > 1) {
        return false
    } else if (length < str.length) {
        return str.substring(0, length)
    } else if (!str || !length || !symbol) {
        return false
    }

    for (let i = 0; i < length; i++) {
        result += symbol
    }
    let retResult = (result + str).slice(-length)
    if (boolean === true) {
        retResult = (str + result).slice(0, length)
    }

    if (typeof symbol !== 'string') throw new Error('This isn\'t a string');
    if (typeof boolean !== 'boolean') throw new Error('This isn\'t a boolean');

    return retResult
}
console.log(padStr('JS', 10,'*'))