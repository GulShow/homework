'use strict'
//Task 1
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

//Task 2
// for (let i = 100; i >= 1 ; i--) {
//     console.log(i);
// }

//Task 3
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//Task 4
// const arr = [1, 2, 3, 4, 5];
// let sum = null;
// for (let i = 0; i < arr.length; i++) {
//      sum += arr[i]
// }
// console.log(sum);

//Task 5
const arr = [1, 2, 3, 4, 5];
let sumSqrt = null
for (let i = 0; i < arr.length ; i++) {
    sumSqrt += Math.pow(arr[i] , 2)
}
console.log(sumSqrt);
