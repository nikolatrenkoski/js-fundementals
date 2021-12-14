/*
const jonas = {
    firstName: ["Jonas"],
    age: [1991],
    driverLicence: true,
    calcAge: function (age) {
        console.log(this)
        return 2037 - this.age;
    }
}
if (jonas.driverLicence) {
    console.log(`${jonas.firstName} is a ${jonas.calcAge(jonas.age)}-year old teacher and has a drivers licence`)
} else console.log(`${jonas.firstName} is a ${jonas.calcAge(jonas.age)}-year old teacher and does not have a drivers licence`)
*/

const myCountry = {
    country: ["Sweden"],
    capital: ["Stockholm"],
    language: ["Swedish"],
    population: [10],
    neighbours: ["Norway", "Finland"],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speakin people, ${this.neighbours.length} neigbouring countries and its capital city is called ${this.capital}`)
    },

    checkIsland: function () {
        this.Island = this.neighbours.length === 0 ? true : false;
    }
}

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry)
