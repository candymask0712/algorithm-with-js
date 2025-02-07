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

targets.forEach((target) => {
  let lp = 0;
  let rp = list.length - 1;
  let answer = 0;
  let mid = parseInt((lp + rp) / 2);

  while (lp <= rp) {
    mid = parseInt((lp + rp) / 2);
    if (list[mid] === target) {
      answer = 1;
      break;
    } else if (list[mid] < target) {
      lp = mid + 1;
    } else {
      rp = mid - 1;
    }
  }
  console.info(answer);
});
