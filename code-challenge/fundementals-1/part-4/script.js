/* more readeble but longer code 

const bill = 275;
let normalTip = bill * 0.15;
let unusualTip = bill * 0.2;
const normalTotalBill = bill + normalTip;
const unusualTotalBill = bill + unusualTip;

normalTip = bill >= 50 && bill <= 300 ? `Your bill is ${bill}, the tip is ${normalTip} and the total value is ${normalTotalBill}` : `Your tip will be more this time ${unusualTip}, the bill is ${bill} and the total value is ${unusualTotalBill}`

console.log(normalTip)
*/

const bill = 200;

const tip = bill >= 50 && bill <= 300 ? `Your bill will be ${bill}, your tip will be ${bill * 0.15}, total bill is ${(bill * 0.15) + bill}` : `Your bill will be ${bill}, your tip will be ${bill * 0.2}, total bill is ${(bill * 0.2) + bill}`;

console.log(tip)