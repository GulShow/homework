'use strict'
const padStr = (str, length, symbol, boolean = "true") => {
    let result = ""

    for (let i = 0; i < length; i++) {
        result += symbol
    }
    let retResult = (result + str).slice(-length)
    if (boolean === "true") {
        retResult = (str + result).slice(0, length)
    }

    if (symbol.length > 1) {
        return false
    } else if (length < str.length) {
        return str.substr(0, length)
    }
    return retResult
}
console.log(padStr('JavaScript', 20, '*', "false"))