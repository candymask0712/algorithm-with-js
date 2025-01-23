// ! 처음에 어떤 유형인지 몰라 gpt에게 유형 힌트받음
function solution(land) {
  const n = land.length;
  const dp = Array.from({ length: n }, () => Array(4).fill(0));

  dp[0] = land[0];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 4; j++) {
      const preArr = dp[i - 1].slice();
      // ! preArr.splice이 원배열 수정인데 착각해서 잘못 계산 됨
      const filtered = preArr.splice(j, 1);
      const prevMax = Math.max(...preArr);
      dp[i][j] = land[i][j] + prevMax;
    }
  }

  return Math.max(...dp[n - 1]);
}
