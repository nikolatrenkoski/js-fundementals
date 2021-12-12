function calcTip(bill, tip, total) {
    return console.log(`The bill is ${bill}, the tip is ${tip} and the total value is ${total}`)
}

const bills = [125, 500, 44]
const tips = [bills[0] * 0.15, bills[1] * 0.2, bills[2] * 0.2]
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

const billOne = calcTip(bills[1], tips[1], total[1])