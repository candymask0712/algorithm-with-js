// * 1차 풀이
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [W, N] = input[0].split(' ').map(Number);
const metals = input.slice(1).map((metal) => metal.split(' ').map(Number));

function solution(W, metals) {
  let totalPrice = 0;
  metals.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    else return b[1] - a[1];
  });
  // console.log(metals)
  metals.forEach((metal) => {
    const [amount, price] = metal;
    const availableAmount = Math.min(amount, W);
    totalPrice += availableAmount * price;
    W -= availableAmount;
  });
  return totalPrice;
}

console.log(solution(W, metals));
