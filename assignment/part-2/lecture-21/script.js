
function describePopulation(country, population) {

    const percent = percentageOfWorld1(population)

    console.log(`${country} has ${population} million people, so its about ${percent}% of the world`);
    return describePopulation;
}

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const china = describePopulation("china", 1440)
const sweden = describePopulation("sweden", 10)
const netherlands = describePopulation("netherlands", 17)
