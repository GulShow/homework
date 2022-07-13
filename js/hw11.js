'use strict'
let promptA = prompt('number')
let promptB = prompt('number')

let first = (number) => {
    return number == 0 ? 'Верно' : 'Неверно'
}
console.log(first(promptA));

let second = (number) => {
    return number > 0 ? 'Верно' : 'Неверно'
}
console.log(second(promptA));

let third = (number) => {
    return number < 0 ? 'Верно' : 'Неверно'
}
console.log(third(promptA));

let fourth = (number) => {
    return number >= 0 ? 'Верно' : 'Неверно'
}
console.log(fourth(promptA));

let fifth = (number) => {
    return number <= 0 ? 'Верно' : 'Неверно'
}
console.log(fifth(promptA));

let six = (number) => {
    return number !== 0 ? 'Верно' : 'Неверно'
}
console.log(six(promptA));

let seven = (string) => {
    return string === 'test' ? 'Верно' : 'Неверно'
}
console.log(seven(promptA));

let eight = (number) => {
    return number === 1 ? 'Верно' : 'Неверно'
}
console.log(eight(+promptA));

let nine = (number) => {
    return number > 0 && number < 5 ? 'Верно' : 'Неверно'
}
console.log(nine(promptA));

let ten = (number) => {
    return number == 0 || number == 2 ? number + 7 : number / 10
}
console.log(ten(+promptA));

let eleven = (a,b) => {
    return a <= 1 && b >= 3 ? a + b : a -b
}
console.log(eleven(+promptA , +promptB));

let twelve = (a,b) => {
    return a > 2 && a < 11 && b >= 6 && b < 14 ? 'Верно' : 'Неверно'
}
console.log(twelve(+promptA , +promptB));

//13
let num = +prompt('number')
let result = null
switch(num) {
    case 1:
     result = 'зима';
    break;
    case 2:
     result = 'весна';
    break;
    case 3:
    result = 'лето';
    break;
    case 4:
    result = 'осень';
    break;
}
console.log(result);














