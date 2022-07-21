'use strict'
const arr = [1, 2, 3, -1, -2, -3];

const toPos = (arr) => {
    const exampleArr = []
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i]
        if (number > 0) {
            exampleArr.push(number)
        }
     }
    if(!exampleArr.length) {
        return null
    }
    return exampleArr
}
console.log(toPos(arr));