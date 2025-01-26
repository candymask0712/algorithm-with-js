// * 1번째 풀이
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

let width = 2;
for (let i = 1; i <= N; i++) {
  width += 2 ** (i - 1);
}

console.log(width ** 2);
