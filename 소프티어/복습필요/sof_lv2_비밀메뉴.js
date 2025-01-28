const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N, K] = input[0].split(' ').map(Number);
const secret = input[1].split(' ').join('');
const buttonPress = input[2].split(' ').join('');

function solution(secret, buttonPress) {
  for (let i = 0; i < buttonPress.length; i++) {
    if (buttonPress.slice(i).startsWith(secret)) return 'secret';
  }
  return 'normal';
}

console.log(solution(secret, buttonPress));
