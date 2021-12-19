const population = [10, 50, 100, 1000]
const percentage2 = []

function percentageOfWorld(population) {
    return population / 7200 * 100
}

let i = 0;
while (i < population.length) {
    const percentage = percentageOfWorld(population[i])
    percentage2.push(percentage)
    i++
}

console.log(percentage2)