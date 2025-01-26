const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const houses = input[1].split(' ').map(Number);

function solution(houses) {
  const max = houses.sort((a, b) => a - b)[houses.length - 1];
  let answer = 0;
  for (let i = 2; i <= max; i++) {
    let count = 0;
    houses.forEach((house) => {
      if (house % i === 0) count++;
    });
    if (count > answer) answer = count;
  }
  return answer;
}

console.log(solution(houses));
