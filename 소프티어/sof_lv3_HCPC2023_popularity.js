const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const stages = input[1].split(' ').map(Number);

function solution(stages) {
  const n = stages.length;
  if (n === 1) return stages[0] + n - 1;

  const rest = stages.slice(1);
  rest.sort((a, b) => b - a);
  let max = rest.length ? rest[0] - stages[0] : 0;
  if (max < 0) max = 0;

  return stages[0] + n - 1 + max;
}

console.log(solution(stages));
