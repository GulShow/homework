'use strict'
const number = +prompt('Your number')
let boolean = true

function simpleNum(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            boolean = false;
        }
    }
    if (number === 1) {
        boolean = false;
    }

    return console.log(boolean);
}

simpleNum(number)