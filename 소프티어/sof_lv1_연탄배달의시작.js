const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

const N = input[0];
const towns = input.slice(1)[0].split(' ').map(Number);

function solution(N, towns) {
  let minDistance = Infinity;
  let count = 0;
  const n = towns.length;
  for (let i = 0; i < n - 1; i++) {
    const distance = towns[i + 1] - towns[i];
    if (distance < minDistance) {
      minDistance = distance;
      count = 0;
    }

    if (distance === minDistance) {
      count++;
    }
  }
  return count;
}

console.log(solution(N, towns));
