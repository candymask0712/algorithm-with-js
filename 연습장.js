const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

function solution(input) {
  const N = parseInt(input[0]);
  const costs = input.slice(1).map((line) => line.split(' ').map(Number));

  // 여기에 문제 해결 로직을 구현하세요

  // 예시 반환값 (실제 로직에 맞게 수정 필요)
  return 0;
}
