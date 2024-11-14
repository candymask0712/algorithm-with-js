// *  나의 풀이
var climbStairs = function (n) {
  // 더 간단하게 작성가능
  const dp = Array.from({ length: n + 1 }, () => 0);
  // 개념상 0에 대해 경우의 수 있는 것 어색
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 참고 풀이
var climbStairs = function (n) {
  // dp 배열 초기화
  let dp = new Array(n + 1);

  // 기본 케이스 설정
  dp[1] = 1; // 1칸을 오르는 방법은 1가지
  dp[2] = 2; // 2칸을 오르는 방법은 2가지

  // 3부터 n까지 계산
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
