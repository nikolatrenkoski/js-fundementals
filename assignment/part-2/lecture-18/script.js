const country = "Sweden";
const continent = "Europe";
const population = 10;
const isIsland = false;
const language = "Swedish";
const capitalCity = "Stockholm"

function describeCountry(country, population, capitalCity) {
    const describeSentence = `${country} has ${population} million people and its capital city is ${capitalCity}`
    console.log(describeSentence)
    return describeCountry
}

const countryOne = describeCountry("Finland", 6, "Helsinki");
const countryTwo = describeCountry(country, population, capitalCity);
const countryThree = describeCountry("Usa", 330, "Washington")