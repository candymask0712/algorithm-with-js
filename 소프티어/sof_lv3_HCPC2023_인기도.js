const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const people = input.slice(1).map((person) => person.split(' ').map(Number));

function solution(people) {
  let answer = 0;
  people.forEach((person) => {
    const [P, C] = person;
    if (Math.abs(P - answer) <= C) answer++;
  });
  return answer;
}

console.log(solution(people));
