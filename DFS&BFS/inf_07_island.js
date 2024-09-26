function solution(arr) {
  let answer = 0;
  const n = arr.length;
  const m = arr[0].length;

  function DFS(x, y) {
    for (let i = 0; i < 4; i++) {
      let dx = [0, 0, 1, -1];
      let dy = [-1, 1, 0, 0];
      const nx = x + dx[i];
      const ny = y + dy[i];
      const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < m;
      if (isValid(nx, ny) && arr[nx][ny] === 1) {
        arr[nx][ny] = 0;
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        answer++;
        arr[i][j] = 0;
        DFS(i, j);
      }
    }
  }

  return answer;
}

const arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0]
];

console.info(solution(arr));
