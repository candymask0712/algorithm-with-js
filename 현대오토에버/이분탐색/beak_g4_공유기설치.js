const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, C] = input[0].split(' ').map(Number);
const houses = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let lp = 1;
let rp = houses[houses.length - 1] - houses[0];
let answer = 0;
while (lp <= rp) {
  const mid = Math.floor((lp + rp) / 2);
  if (isValid(mid, houses, C)) {
    answer = Math.max(mid, answer);
    lp = mid + 1;
  } else {
    rp = mid - 1;
  }
}
console.log(answer);

function isValid(mid, houses, C) {
  let diff = 0;
  const n = houses.length;
  // ! 첫집은 무조건 설치하는 로직
  C--;
  for (let i = 1; i < n; i++) {
    if (houses[i] - houses[i - 1 - diff] >= mid) {
      C--;
      diff = 0;
    } else {
      diff++;
    }
    if (C === 0) return true;
  }
  return false;
}
