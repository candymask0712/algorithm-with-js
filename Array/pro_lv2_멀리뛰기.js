function solution(n) {
  var answer = 0;

  const cases = Array(n + 1).fill(null);
  cases[1] = 1;
  cases[2] = 2;

  for (let i = 3; i <= n; i++) {
    cases[i] = (cases[i - 1] + cases[i - 2]) % 1234567;
  }

  return cases[n];
}
