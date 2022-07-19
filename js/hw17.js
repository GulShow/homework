'use strict'
const number = +prompt('Your Number')
const extent = +prompt('Your extent')
const toSqrt = (a,b = 1) => {
if(Number.isFinite(a) && Number.isFinite(b)) {
    return a ** b
}
else {
    return 'Some error'
}
}
alert(toSqrt(number, extent))