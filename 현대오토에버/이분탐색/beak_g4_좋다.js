let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

function isGood(n, numbers, target, i) {
  let lp = 0;
  // ! 음수를 고려하지 않아 조건을 잘못 설정
  let rp = n - 1;

  while (lp < rp) {
    if (lp === i) {
      lp++;
      continue;
    }
    if (rp === i) {
      rp--;
      continue;
    }

    const sum = numbers[lp] + numbers[rp];

    if (sum < target) {
      lp++;
    } else if (sum > target) {
      rp--;
    } else {
      return true;
    }
  }
  return false;
}

function solution(N, numbers) {
  numbers.sort((a, b) => a - b);
  let answer = 0;
  const n = numbers.length;
  for (let i = 0; i < n; i++) {
    const target = numbers[i];
    if (isGood(n, numbers, target, i)) answer++;
  }

  return answer;
}
