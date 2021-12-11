const neighbours = ["Finland", "Norway"]

neighbours.push("Utopia")
neighbours.pop()

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country")
}

else console.log("Probably a central European country")

neighbours[neighbours.indexOf("Finland")] = "Republic of Finland"

console.log(neighbours)