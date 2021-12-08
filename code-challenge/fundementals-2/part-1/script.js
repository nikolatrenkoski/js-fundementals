/*
const dolphinScoreOne = 97;
const dolphinScoreTwo = 112;
const dolphinScoreThree = 101;
const dolphinAverageScore = (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;

const koalaScoreOne = 109;
const koalaScoreTwo = 95;
const koalaScoreThree = 106;
const koalaAverageScore = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;

if (dolphinAverageScore > koalaAverageScore && dolphinAverageScore >= 100) console.log("Dolphins win!");
else if (koalaAverageScore > dolphinAverageScore && koalaAverageScore >= 100) console.log("Koalas win!");
else if (dolphinAverageScore === koalaAverageScore && koalaAverageScore >= 100) console.log("draw");
else console.log("No team wins, score to low!");

*/

const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
    return (scoreOne + scoreTwo + scoreThree) / 3
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) console.log(`Dolphins win! dolphins score is  ${dolphins} and koalas score is ${koalas}`);

    else if (avgKoalas > avgDolphins * 2) console.log(`Koalas win! koala score is ${koalas} and dolphins score is ${dolphins}`);
    else console.log("draw")
}

const dolphins = calcAverage(85, 54, 41)
const koalas = calcAverage(23, 34, 27)

const gameWinner = checkWinner(dolphins, koalas)