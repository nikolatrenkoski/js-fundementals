const marksWeight = 78;
const marksHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const marksBMI = marksWeight / marksHeight ** 2;

const johnBMI = johnWeight / johnHeight ** 2;


if (marksBMI > johnBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})!`)
}

else {
    console.log(`John's BMI (${marksBMI}) is higher than Mark's (${marksBMI})!`)
}