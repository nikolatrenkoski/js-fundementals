const percentageOfWorld3 = population => (population / 7900 * 100)

const china = percentageOfWorld3(1440)
const sweden = percentageOfWorld3(10)
const netherlands = percentageOfWorld3(17)

console.log(china, sweden, netherlands)