// * 1차 풀이
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = '';
const brackets = input.split('');

brackets.forEach((cur, index) => {
  const next = brackets[index + 1];
  answer += cur;
  if (cur === '(' && next === ')') {
    answer += '1';
  }
  if (cur === ')' && next === '(') {
    answer += '+';
  }
});

console.log(answer);
