/*
function add7(number) {
  return number + 7;
}

const num = add7(3);
console.log(num);


function multiplay(num1, num2) {
  return num1 * num2;
}

const multiplication = multiplay(1, 2);
console.log(multiplication);


function capitalize(word) {
  let letter = word.charAt();
  let capitalConveter = letter.toUpperCase();
  return capitalConveter;
}
const mean = capitalize("hello");
console.log(mean);
*/

function lastLetter(word) {
  let letter = word.charAt(word.length - 1);
  return letter;
}

const mean = lastLetter("hello");
console.log(mean);
