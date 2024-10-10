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
//   const T = parseInt(input[0]);

//   for (let i = 1; i <= T; i++) {
//     const N = parseInt(input[i]);
//     const result = fibonacci(N);
//     console.log(result[0] + ' ' + result[1]);
//   }

//   process.exit();
// });

// function fibonacci(n) {
//   let arr = Array.from(Array(n), () => []);
//   arr[0] = [1, 0];
//   arr[1] = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const [cnt1, cnt2] = arr[i - 2];
//     const [cnt3, cnt4] = arr[i - 1];
//     arr[i] = [cnt1 + cnt3, cnt2 + cnt4];
//   }
//   return arr[n];
// }
// console.info(fibonacci(0));
// console.info(fibonacci(1));
// console.info(fibonacci(2));
// console.info(fibonacci(3));
// console.info(fibonacci(4));

// 나의 풀이
function fibonacci(n) {
  let arr = Array.from(Array(n), () => []);
  arr[0] = [1, 0];
  arr[1] = [0, 1];
  for (let i = 2; i <= n; i++) {
    const [cnt1, cnt2] = arr[i - 2];
    const [cnt3, cnt4] = arr[i - 1];
    arr[i] = [cnt1 + cnt3, cnt2 + cnt4];
  }
  return arr[n];
}

// 참고 풀이
function fibonacci(n) {
  if (n === 0) return [1, 0];
  if (n === 1) return [0, 1];

  let prev = [1, 0];
  let curr = [0, 1];

  for (let i = 2; i <= n; i++) {
    //  ! 별도의 배열을 만들지 않고 직전 두개만 계산
    let next = [curr[0] + prev[0], curr[1] + prev[1]];
    prev = curr;
    curr = next;
  }

  return curr;
}
