// * 1차 풀이
const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const ASC = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]);
const DES = JSON.stringify([8, 7, 6, 5, 4, 3, 2, 1]);
const INPUT = JSON.stringify(input);

if (INPUT === ASC) console.log('ascending');
else if (INPUT === DES) console.log('descending');
else console.log('mixed');
