function solution(N, number) {
  const LIMIT = 8;

  if (N === number) return 1;

  const dp = Array.from({ length: LIMIT + 1 }, () => new Set());

  for (let i = 1; i <= LIMIT; i++) {
    dp[i].add(Number(String(N).repeat(i)));

    for (let j = 1; j < i; j++) {
      for (const num1 of dp[j]) {
        for (const num2 of dp[i - j]) {
          dp[i].add(num1 + num2);
          dp[i].add(num1 - num2);
          dp[i].add(num2 - num1);
          dp[i].add(num1 * num2);

          if (num2 !== 0) dp[i].add(Math.floor(num1 / num2));
          if (num1 !== 0) dp[i].add(Math.floor(num2 / num1));
        }
      }
    }

    if (dp[i].has(number)) return i;
  }

  return -1;
}
