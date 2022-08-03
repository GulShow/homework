'use strict'
//1
// const arr = ['a','b','c','d']
// console.log(`${arr[0]} + ${arr[1]} , ${arr[2]} + ${arr[3]}`)

//2
// const arr = [2,5,3,9]
// const result = (arr[0] * arr[1]) + (arr[2] * arr[3])
// console.log(result);

//3
// const arr =  [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
// console.log(arr[1][0]);

//4
// const obj =  {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
// console.log(obj['js'][0]);

//5
// let arr = [];
// let str = 'x';
// for (let i = 0; i < 6; i++) {
//     arr.push(str);
//     str += 'x';
// }
// console.log(arr);

//6
// let arr = [];
// for (let i = 1; i < 6; i++) {
//     let str = '';
//     for (let j = 0; j < i ; j++) {
//         str += i;
//     }
//     arr.push(str);
// }
// console.log(arr);

//7
// function arrayFill (str, a) {
//    let arr = []
//     for( let i =0; i < a; i++) {
//         arr.push(str)
//     }
//     return arr
// }
// console.log(arrayFill('x', 5));

//8
// const func = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     if(sum > 10) {
//         return arr.length
//     }
// }
// console.log(func([0, 1, 3, 4, 5]));

//9
//    let arr = [1, 3, 5, 6, 7, 9];
//    let result = [];
//    const reverse = (arr) => {
//        for (let i = arr.length - 1; i >= 0; i--) {
//            result.push(arr[i]);
//        }
//        return result
//    }
// console.log(reverse(arr));

//10
// const sum = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             sum += arr[i][j]
//         }
//     }
//     return sum
// }
// console.log(sum([[1, 2, 3], [4, 5], [6]]));

//11
// const sum = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             for (let k = 0; k < arr[j].length; k++) {
//                 sum += arr[i][j][k]
//             }
//         }
//     }
//     return sum
// }
// console.log(sum( [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]));



