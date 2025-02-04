const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [K, N] = input[0].split(' ').map(Number);
const lineList = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
let lp = 1;
let rp = lineList[lineList.length - 1];

while (lp <= rp) {
  const mid = Math.floor((lp + rp) / 2);

  if (isPossible(mid, lineList, N)) {
    answer = mid;
    lp = mid + 1;
  } else {
    rp = mid - 1;
  }
}
console.info(answer);

function isPossible(len, lineList, N) {
  let count = 0;
  lineList.forEach((line) => {
    count += Math.floor(line / len);
  });
  // console.log(count, N);
  return count >= N;
}
