const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let lp = 0;
let rp = trees[trees.length - 1];
let answer = 0;

while (lp <= rp) {
  const mid = Math.floor((lp + rp) / 2);
  const totalLength = getTotalLength(mid, trees);

  if (totalLength >= M) {
    answer = Math.max(answer, mid);
    lp = mid + 1;
  } else {
    rp = mid - 1;
  }
}
console.info(answer);

function getTotalLength(k, arr) {
  let total = 0;
  arr.forEach((num) => {
    if (num > k) total += num - k;
  });
  return total;
}
