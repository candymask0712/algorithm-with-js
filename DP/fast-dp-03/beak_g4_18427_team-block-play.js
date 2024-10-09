// 문제풀이 템플릿
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];
// let N, M, H;
// let blocks = [];

// rl.on('line', function (line) {
//   input.push(line.trim());
// }).on('close', function () {
//   // 첫 번째 줄 처리
//   [N, M, H] = input[0].split(' ').map(Number);

//   // 나머지 줄 처리
//   for (let i = 1; i <= N; i++) {
//     blocks.push(input[i].split(' ').map(Number));
//   }

//   // 문제 해결 함수 호출
//   const result = solution(N, M, H, blocks);

//   // 결과 출력
//   console.log(result);

//   process.exit();
// });

// function solution(N, M, H, blocks) {}

// 해설 풀이
function solveTowerBuilding(N, M, H, blocks) {
  const MOD = 10007;
  // dp[i][j]: i번째 학생까지 고려했을 때, 높이 j인 탑을 만드는 경우의 수
  const dp = Array.from({ length: N + 1 }, () => new Array(H + 1).fill(0));

  // 초기 상태: 아무 블록도 선택하지 않았을 때, 높이 0인 탑을 만드는 경우의 수는 1
  dp[0][0] = 1;

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= H; j++) {
      // i번째 학생의 블록을 선택하지 않는 경우
      dp[i][j] = dp[i - 1][j];

      // i번째 학생의 블록을 선택하는 경우
      for (let k = 0; k < blocks[i - 1].length; k++) {
        const blockHeight = blocks[i - 1][k];
        if (j >= blockHeight) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - blockHeight]) % MOD;
        }
      }
    }
  }
  console.table(dp);

  return dp[N][H];
}

// 예제 사용
const N = 3,
  M = 3,
  H = 5;
const blocks = [
  [2, 3, 5],
  [3, 5],
  [1, 2, 3]
];

console.log(solveTowerBuilding(N, M, H, blocks)); // 출력: 6
