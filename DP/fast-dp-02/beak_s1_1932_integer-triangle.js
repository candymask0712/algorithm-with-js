// 문제 템플릿

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];
// let n;
// let triangle = [];

// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   n = parseInt(input[0]);
//   for (let i = 1; i <= n; i++) {
//     triangle.push(input[i].split(' ').map(Number));
//   }
//   console.log(solution(n, triangle));
//   process.exit();
// });

// function solution(n, triangle) {

// }

// console.info(
//   solution(5, [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])
// );

// 1차 풀이
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let n;
let triangle = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  n = parseInt(input[0]);
  for (let i = 1; i <= n; i++) {
    triangle.push(input[i].split(' ').map(Number));
  }
  console.log(solution(n, triangle));
  process.exit();
});

function solution(n, triangle) {
  // ! n이 1일 때를 고려하지 않고 하드코딩
  triangle[1][0] += triangle[0][0];
  triangle[1][1] += triangle[0][0];
  for (let i = 2; i < n; i++) {
    const m = triangle[i].length;
    for (let j = 0; j < m; j++) {
      if (j === 0) triangle[i][j] += triangle[i - 1][j];
      else if (j === m - 1) triangle[i][j] += triangle[i - 1][j - 1];
      else {
        const bigger = Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
        triangle[i][j] += bigger;
      }
    }
  }

  return Math.max(...triangle[n - 1]);
}

console.info(
  solution(5, [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])
);

// 재풀이
function solution(n, triangle) {
  for (let i = 1; i < n; i++) {
    const m = triangle[i].length;
    for (let j = 0; j <= i; j++) {
      if (j === 0) triangle[i][j] += triangle[i - 1][j];
      else if (j === m - 1) triangle[i][j] += triangle[i - 1][j - 1];
      else {
        const bigger = Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
        triangle[i][j] += bigger;
      }
    }
  }

  return Math.max(...triangle[n - 1]);
}
