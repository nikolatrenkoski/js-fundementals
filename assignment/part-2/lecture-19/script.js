function percentageOfWorld(country, population) {
    const percent = population / 7900 * 100;
    console.log(`${country} has ${population} million people, so its about ${percent}% of the world population`)
    return percent
}

const countryOne = percentageOfWorld("China", 1441)
const countryTwo = percentageOfWorld("Sweden", 10)
const countryThree = percentageOfWorld("South Korea", 51)


const percentageOfWorld2 = function (country, population) {
    const percent = population / 7900 * 100;
    console.log(`${country} has ${population} million people, so its about ${percent}% of the world population`)
    return percent
}

const country1 = percentageOfWorld2("China", 1441)
const country2 = percentageOfWorld2("Sweden", 10)
const country3 = percentageOfWorld2("South Korea", 51)

