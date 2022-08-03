'use strict'
//1
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const result = arr1.concat(arr2)
// console.log(result);

//2
// const arr = [1, 2, 3]
// console.log(arr.reverse());

//3
// const arr = [1, 2, 3]
// arr.push(4, 5, 6)
// console.log(arr);

//4
// const arr = [1, 2, 3]
// arr.unshift(4,5,6)
// console.log(arr);

//5
// const arr = ['js', 'css', 'jq']
// const result = arr.slice(0,1)
// console.log(result);

//6
// const arr = ['js', 'css', 'jq']
// const result = arr.slice(2)
// console.log(result);

//7
// const arr = [1, 2, 3, 4, 5]
// const result = []
// arr.map(function(item){
//     if(item <= 3) result.push(item)
// })
// console.log(result);

//8
// const arr = [1, 2, 3, 4, 5]
// const result = []
// arr.map(function(item){
//     if(item >= 4) result.push(item)
// })
// console.log(result);


//9
// const arr = [1, 2, 3, 4, 5]
// const result = []
// arr.map(function(item){
//     if(item >= 4 || item === 1) result.push(item)
// })
// console.log(result);


//10
// const arr = [1, 2, 3, 4, 5]
// const result = []
// arr.map(function(item){
//     if(item > 1 && item < 5 ) result.push(item)
// })
// console.log(result);

//11
// const arr = [1, 2, 3, 4, 5]
// arr.splice(3,0 , 'a' , 'b' , 'c')
// console.log(arr);

//12
// const arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0, 'a','b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);

//13
// const arr = [3, 4, 1, 2, 7]
// arr.sort()
// console.log(arr);

//14
// const arr = [5, 6, 7, 8, 9]
// const result = arr.reduce(function(sum, elem) {
//     return sum + elem;
// }, 0);
//
// console.log(result);

//15
// const arr = [5, 6, 7, 8, 9]
// const result = arr.reduce(function(sum, elem) {
//     return sum + elem ** 2;
// }, 0);
//
// console.log(result);

//16
// const arr = [1,-3, 5, 6,-7, 8, 9,-11]
// const result = []
// arr.map(function(item){
//     if(item < 0) result.push(item)
// })
// console.log(result);

//17
// const arr = [1,-3, 5, 6,-7, 8, 9,-11]
// const result = []
// arr.map(function(item){
//     if(item % 2 === 0) result.push(item)
// })
// console.log(result);

//18
// const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']
// const result = []
// arr.map(function(item){
//     if(item.length > 5) result.push(item)
// })
// console.log(result);


//19
// const arr = [1, 2, [3, 4], 5, [6, 7]]
// const result = []
// arr.map(function(item){
//     if(typeof item === "object") result.push(item)
// })
// console.log(result);

//20
// const arr = [5,-3, 6,-5, 0,-7, 8, 9]
// const result = []
// arr.map(function(item){
//     if(item < 0) result.push(item)
// })
// console.log(result.length);





