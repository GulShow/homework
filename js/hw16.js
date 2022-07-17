'use strict'
const number = +prompt('Your number')
function simpleNum(number) {
    if ( number === 1 ) { return number; }
    else if (number < 1) { return NaN; }
    let dell = 2;
    while ( number % dell !== 0 ) {
        dell = dell + 1;
    }
    return dell;
}

console.log(simpleNum(number));