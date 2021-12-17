const population = [10, 20, 100, 1000]
const percentages2 = []

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

for (i = 0; i < population.length; i++) {
    const percanteageOfCounrty = percentageOfWorld1(population[i]);
    percentages2.push(percanteageOfCounrty)
}

console.log(percentages2)