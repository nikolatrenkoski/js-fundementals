const country = "Sweden";
const continent = "Europe";
const population = 10;
const isIsland = false;
const language = "Swedish";

if (language === "English" && population < 50 && !isIsland) console.log(`You should live in ${country}`)

else console.log(`${country} does not meet your criteria ;(`)