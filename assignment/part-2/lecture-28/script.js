/*
const jonas = {
    firstname: ["Jonas"],
    friends: ["Michael", "Bob", "Steve"],
}

console.log(`${jonas.firstname} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)
*/

const myCountry = {
    country: ["Sweden"],
    capital: ["Stockholm"],
    language: ["Swedish"],
    population: [10],
    neighbours: ["Norway", "Finland"]
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speakin people, ${myCountry.neighbours.length} neigbouring countries and its capital city is called ${myCountry.capital}`)

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);
