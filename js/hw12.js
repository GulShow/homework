'use strict'
const age = prompt('Your age')
const city = prompt('Your city')
const sport = prompt('Your fav sport')


function ageCalc (a) {
    if(age === null) {
        return 'It is a pity that you did not want to enter your age'
    }
    else {
        return `Your age is ${a}`
    }
}

function cityCalc (city) {
    if(city === 'Kiev' || city === 'Moscow' || city === 'Minsk') {
        return `You live in the capital called ${city}`
    }
    else if(city === null) {
       return 'It is a pity that you did not want to enter your city'
    }
    else {
        return `You live in the city called ${city}`
    }

}

function sportCalc(sport) {
    if(sport === 'Basketball') {
        return 'Cool! Do you wanna be like LeBron James?'
    }
    else if(sport === 'Football') {
        return 'Cool! Do you wanna be like Leo Messi?'
    }
    else if(sport === 'Tennis') {
        return 'Cool! Do you wanna be like Raphael Nadal?'
    }
    else if(sport === null) {
        return 'It is a pity that you did not want to enter your fav sport'
    }
}

alert(`
${ageCalc(age)}
${cityCalc(city)}
${sportCalc(sport)}
`)