function solution(arr) {
  const n = Math.floor(arr.length / 2) + 1;
  const maxDp = Array.from({ length: n }, () => Array(n).fill(-Infinity));
  const minDp = Array.from({ length: n }, () => Array(n).fill(Infinity));

  // 숫자 배열을 초기화
  for (let i = 0; i < n; i++) {
    maxDp[i][i] = minDp[i][i] = Number(arr[i * 2]);
  }

  // 부분 수열의 길이를 2부터 증가시키며 계산
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;

      // 가능한 모든 k 지점을 확인
      for (let k = i; k < j; k++) {
        const op = arr[k * 2 + 1]; // 연산자

        if (op === '+') {
          maxDp[i][j] = Math.max(maxDp[i][j], maxDp[i][k] + maxDp[k + 1][j]);
          minDp[i][j] = Math.min(minDp[i][j], minDp[i][k] + minDp[k + 1][j]);
        } else if (op === '-') {
          maxDp[i][j] = Math.max(maxDp[i][j], maxDp[i][k] - minDp[k + 1][j]);
          minDp[i][j] = Math.min(minDp[i][j], minDp[i][k] - maxDp[k + 1][j]);
        }
      }
    }
  }

  return maxDp[0][n - 1];
}
