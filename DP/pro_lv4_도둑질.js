function solution(money) {
  const N = money.length;
  const dp1 = Array(N).fill(0);

  dp1[0] = 0;
  dp1[1] = money[1];

  for (let i = 2; i < N; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]);
  }

  const dp2 = Array(N).fill(0);

  dp2[0] = money[0];
  dp2[1] = money[0];

  for (let i = 2; i < N; i++) {
    if (i === N - 1) dp2[i] = Math.max(dp2[i - 1]);
    else dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
  }

  // ! dp3은 필요없는 조건 (dp1에서 처리)
  const dp3 = Array(N).fill(0);

  dp2[0] = 0;
  dp2[0] = 0;

  for (let i = 2; i < N; i++) {
    dp3[i] = Math.max(dp3[i - 1], dp3[i - 2] + money[i]);
  }

  dp1.sort((a, b) => a - b);
  dp2.sort((a, b) => a - b);
  dp3.sort((a, b) => a - b);

  return Math.max(dp1[N - 1], dp2[N - 1], dp3[N - 1]);
}
