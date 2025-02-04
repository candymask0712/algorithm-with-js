const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const costs = input.slice(1).map(Number);

function solution(N, M, costs) {
  const total = costs.reduce((acc, cur) => acc + cur, 0);
  let answer = total;
  const min = costs.slice().sort((a, b) => a - b)[costs.length - 1];

  const days = N - M;

  let lp = min;
  let rp = total;

  while (lp <= rp) {
    const mid = parseInt((lp + rp) / 2);
    let count = 1; // 출금 횟수
    let currentMoney = mid;

    for (let cost of costs) {
      if (currentMoney < cost) {
        count++; // 출금 횟수 증가
        currentMoney = mid;
      }
      currentMoney -= cost;
    }

    if (count > M) {
      rp = mid;
    } else if {
      lp = mid;
    }
     else {
    }
  }

  return answer;
}

console.info(solution(N, M, costs));
