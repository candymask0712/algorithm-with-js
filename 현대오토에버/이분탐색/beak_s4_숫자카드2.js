// 해시 방식의 풀이
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const list = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const M = Number(input[2]);
const targets = input[3].split(' ').map(Number);

const h = new Map();

list.forEach((num) => {
  if (h.has(num)) h.set(num, h.get(num) + 1);
  else h.set(num, 1);
});
const answer = [];
targets.forEach((num) => {
  if (h.has(num)) answer.push(h.get(num));
  else answer.push(0);
});

console.log(answer.join(' '));
