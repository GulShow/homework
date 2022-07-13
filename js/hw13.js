//Task1
let x = 10, y = 7;
const xy = (a, b) => {
    return a > b ? 'x больше, чем y' : 'x не больше, чем y';
};
console.log(xy(x, y));

//Task 2
// const num = +prompt('Number')
// function numberCalc(num) {
//     if(num % 2 === 0) {
//         return `Число ${num} четное`
//     }
//     else if(num % 2 !== 0) {
//         return `Число ${num} нечетное`
//     }
// }
// alert(numberCalc(num))

//Task 3
// const number = +prompt('Number')
// function isInteger(a) {
//     return a % 1 === 0 ? a : 'Число не целое!'
//
// }
// function isPos(a) {
//     if(a > 0) {
//         return `Число ${a} точно положительное`
//     }
//     else {
//         return `Число ${a} точно неположительное`
//     }
// }
//
// function length(a) {
//     if(a % 1 === 0) {
//         return `Длина числа ${a.toString().length}`
//     }
//     else {
//         return 'Число не целое!'
//     }
// }
//
// alert(`
// ${isInteger(number)}
// ${isPos(number)}
// ${length(number)}
// `)

//Task 4
// const a = +prompt('Number 1')
// const b = +prompt('Number 2')
// const c = +prompt('Number 3')
//
// function isBigger(a,b,c) {
//     if(a > b && a > c) {
//         return a
//     }
//     else if(b > a && b > c) {
//         return b
//     }
//     else if(c > a && c > b) {
//         return c
//     }
// }
// alert(`Your biggest number is${isBigger(a,b,c)}`)

//Task 5
const a = +prompt('Side 1')
const b = +prompt('Side 2')
const c = +prompt('Side 3')

function isTrue(a,b,c) {
    if(a + b > c && a + c > b && b + c > a) {
        return 'Can be'
    }
    else {
        return 'Can\'t be'
    }
}
alert(isTrue(a,b,c))


