'use strict'
const ageYear = prompt('Your birth year')
const city = prompt('Your city')
const sport = prompt('Your fav sport')
const currentYear = (new Date()).getFullYear()

function ageCalc (a) {
    if(ageYear === null || ageYear === '') {
        return 'It is a pity that you did not want to enter your birth year'
    }
    else {
        return `Your age is ${currentYear - a}`
    }
}

function cityCalc (city) {
    if(city === 'Kiev' || city === 'Moscow' || city === 'Minsk') {
        return `You live in the capital called ${city}`
    }
    else if(city === null || city === '') {
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
    else if(sport === null || sport === '') {
        return 'It is a pity that you did not want to enter your fav sport'
    }
    else {
        return `Cool! You like ${sport}`
    }
}

alert(`
${ageCalc(ageYear)}
${cityCalc(city)}
${sportCalc(sport)}
`)