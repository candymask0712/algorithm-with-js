// * 추천 풀이
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, inform] = input;
solve(n, inform);

function solve(n, inform) {
  let line = inform
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let negative = line[0] * line[1];
  let positive = line[line.length - 1] * line[line.length - 2];
  console.log(Math.max(negative, positive));
}

// * 첫번째 풀이

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');
const N = input[0];
const lands = input[1].split(' ').map(Number);

function solution(lands) {
  let max = -Infinity;

  const n = lands.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const multiply = lands[i] * lands[j];
      // ! 등호여부에 따라 정답이 달라지는 현상
      if (multiply >= max) max = multiply;
    }
  }
  return max;
}

console.log(solution(lands));
