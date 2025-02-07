const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number))
  .flat();

const T = inputs.shift(); // 총 시간
const W = inputs.shift(); // 최대 이동 횟수
const falls = inputs; // 각 시간마다 떨어지는 자두 위치

// DP 테이블 생성: dp[시간][이동횟수] = 받을 수 있는 최대 자두 개수
const dp = Array.from({ length: T }, () => Array(W + 1).fill(0));

// 초기 값 설정
for (let move = 0; move <= W; move++) {
  dp[0][move] = falls[0] === (move % 2 === 0 ? 1 : 2) ? 1 : 0;
}

console.log(dp);

// DP 테이블 채우기
for (let time = 1; time < T; time++) {
  // 이동하지 않은 경우 (0번 이동)
  dp[time][0] = dp[time - 1][0] + (falls[time] === 1 ? 1 : 0);
  // 이동 가능한 경우
  for (let move = 1; move <= W; move++) {
    // 이전 상태에서 이동하지 않은 경우 vs 이동한 경우 중 최댓값 선택
    dp[time][move] = Math.max(dp[time - 1][move], dp[time - 1][move - 1]);
    // 현재 위치에서 자두를 받을 수 있는 경우 추가
    const curPosition = move % 2 === 0 ? 1 : 2;
    if (falls[time] === curPosition) dp[time][move] += 1;
  }
}

// 최댓값 출력
console.log(Math.max(...dp[T - 1]));
