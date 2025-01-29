const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.split(' ').map(Number));

function solution(grid, n) {
  let answer = 0;

  for (let i = 0; i < 4; i++) {
    const result = getMaxPair(grid, n);
    // console.log(result)
    if (result === '') return answer;
    else {
      const [max1, max2] = result;
      const [a, b] = max1;
      const [c, d] = max2;
      answer += grid[a][b] + grid[c][d];
      grid[a][b] = 0;
      grid[c][d] = 0;
    }
  }
  return answer;
}

function getMaxPair(grid, n) {
  let maxTotal = -Infinity;
  let max1 = [0, 0];
  let max2 = [0, 1];

  const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const isValid = (a, b) => a >= 0 && b >= 0 && a < n && b < n;
  // console.log('nnn', n)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log('!!!')
      const cur = grid[i][j];
      if (cur === 0) continue;
      for (const [dx, dy] of DIRECTIONS) {
        const nx = i + dx;
        const ny = j + dy;
        if (isValid(nx, ny) && grid[nx][ny] !== 0) {
          const near = grid[nx][ny];
          // console.log(i , j, nx, ny, near)

          if (cur + near > maxTotal) {
            maxTotal = cur + near;
            max1 = [i, j];
            max2 = [nx, ny];
          }
        }
      }
    }
  }
  if (maxTotal === -Infinity) return '';
  return [max1, max2];
}

console.log(solution(grid, n));
