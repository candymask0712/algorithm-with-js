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

console.info(
  solution(5, [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])
);
console.info(
  solution(1, [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])
);

//      7
//    10 15
//   18  16  15
//  20  25  20 19
// 24  30  27  26  24

//       0
//      0 1
//    0  1  2
//  0  1  2  3
