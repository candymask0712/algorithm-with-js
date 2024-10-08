// 템플릿
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   const N = parseInt(input[0]);
//   const result = solution(N);
//   console.log(result);
//   process.exit();
// });

// function solution(N) {

// }

// 나의 풀이
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = parseInt(input[0]);
  const result = solution(N);
  console.log(result);
  process.exit();
});

function solution(N) {
  if (N === 1) return 1;
  if (N === 2) return 2;

  let prev = 1;
  let curr = 2;
  let answer = 0;

  for (let i = 3; i <= N; i++) {
    let newCurr = (prev + curr) % 15746;
    prev = curr;
    curr = newCurr;
  }
  // ! newCurr에서 모듈러 연산을 하고 있지만 그 결과도 15746를 초과할 수 있으니 한 번 더 해주어야함
  return curr % 15746;
}
