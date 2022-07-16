'use strict'

const number = +prompt('Your number')

function simpleNum(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
           number = 'Number isn\'t a simple one'
            break;
        }
    }
    if (number === 1) {
        console.log(number);
    }
else
    if (number < 1) {
        console.log(NaN);
    }
    else {
        console.log(number);
    }
}

simpleNum(number)