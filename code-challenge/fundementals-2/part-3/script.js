
const mark = {
    firstName: ["Mark"],
    mass: [78],
    height: [1.69],

    calcBMI: function (mass, height) {
        const bmi = mass / height ** 2
        console.log(bmi)
        return bmi
    }
}

mark.calcBMI(mark.mass, mark.height)