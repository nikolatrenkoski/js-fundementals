const population = [10, 20, 100, 1000]

console.log(population.length === 4);

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}



const percentages = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2]), percentageOfWorld1(population[3])]
console.log(percentages)