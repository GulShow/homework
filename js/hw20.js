'use strict'


function needPrice() {
    function needKg(litres) {
        return (litres * 4 * 75) / 1000
    }

    return Math.floor(needKg(48) * 13)
}
console.log(needPrice());

