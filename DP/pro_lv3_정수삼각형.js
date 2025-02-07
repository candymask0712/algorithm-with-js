function solution(triangle) {
  const n = triangle.length;
  const m = triangle[0].length;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const left = j - 1 >= 0 ? triangle[i - 1][j - 1] : 0;
      const right = j < triangle[i - 1].length ? triangle[i - 1][j] : 0;
      triangle[i][j] += Math.max(left, right);
    }
  }

  return Math.max(...triangle[n - 1]);
}
