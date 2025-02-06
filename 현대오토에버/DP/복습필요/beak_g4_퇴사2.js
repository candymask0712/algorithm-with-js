const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const list = input.slice(1).map((line) => line.split(' ').map(Number));

const dp = Array(N + 1).fill(0);

for (let i = N - 1; i >= 0; i--) {
  const [T, P] = list[i];
  if (i + T <= N) {
    dp[i] = Math.max(dp[i + 1], dp[i + T] + P);
  } else {
    dp[i] = Math.max(dp[i + 1]);
  }
}

console.log(Math.max(dp[0]));

// 💡 핵심 정리
// 	1.	뒤에서부터 DP 배열을 채운다.
// 	2.	각 날에 상담을 할 수 있으면 → max(다음날 dp 값, 상담 수익 + (상담 끝나는 날의 dp 값))
// 	3.	할 수 없으면 → dp[i] = dp[i+1]
// 	4.	마지막에 dp[0]이 최대 수익을 반환
