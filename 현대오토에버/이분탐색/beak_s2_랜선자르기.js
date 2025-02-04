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
// ! 갯수의 극대화라고 생각해 가장 짧은 랜선으로 설정하는 실수
let rp = lineList[lineList.length - 1];

while (lp <= rp) {
  const mid = Math.floor((lp + rp) / 2);

  if (isPossible(mid, lineList, N)) {
    answer = mid;
    // ! lp를 그냥 mid로 할당 -> 무한 반복
    lp = mid + 1;
  } else {
    // ! rp를 그냥 mid로 할당 -> 무한 반복
    rp = mid - 1;
  }
}
console.info(answer);

function isPossible(len, lineList, N) {
  let count = 0;
  lineList.forEach((line) => {
    count += Math.floor(line / len);
  });
  return count >= N;
}
