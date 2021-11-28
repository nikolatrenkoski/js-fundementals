let numNeighbours = Number(prompt("How many neighbouring countries does your country have? "))

if (numNeighbours === 1) console.log("only 1 border!")

else if (numNeighbours > 1) console.log("More than 1 border")

else {
    console.log("No borders")
}