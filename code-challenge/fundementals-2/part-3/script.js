const mark = {
    firstName: ["Mark"],
    mass: [78],
    height: [1.69],

    calcBMI: function (mass, height) {
        this.bmi = mass / height ** 2;
        console.log(this.bmi);
        return this.bmi;
    }

}

const john = {
    firstName: ["John"],
    mass: [92],
    height: [1.95],

    calcBMI: function (mass, height) {
        this.bmi = mass / height ** 2;
        console.log(this.bmi);
        return this.bmi;
    },
}


//i know that im reapting code, but the the coding-challing explicity said to write calcBMI method on each object..


john.calcBMI(john.mass, john.height) >= mark.calcBMI(mark.mass, mark.height) ? console.log(`John's BMI ${john.bmi} is higher then Marks's ${mark.bmi}`) : console.log(`Mark's BMI ${mark.bmi} is higher then John's ${john.bmi}`)