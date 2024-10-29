<<<<<<< HEAD
function solution(n, distances, prices) {
  return prices.reduce((acc, price, index) => {
    console.info(acc, price, index)
      
      if(index === prices.length -1) return acc
      else return acc + distances[index]*price
  }, 0)
}

console.info(solution(4, [2,3,1], [5,2,4,1])) // 18
console.info(solution(4, [3,3,4], [1,1,1,1])) // 10
=======
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
>>>>>>> 65bfa5f22d938f6e4477e45b2a7bbc88f301303a
