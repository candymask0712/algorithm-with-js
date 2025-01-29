const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map((line) => line.split(' ').map(Number));
const targets = input
  .slice(n + 1)
  .map((target) => target.split(' ').map((location) => Number(location) - 1));

function solution(grid, targets) {
  let answer = 0;

  function DFS(cur, targets) {
    const [curTargetX, curTargetY] = targets[0];
    if (cur[0] === curTargetX && cur[1] === curTargetY) {
      if (targets.length === 1) {
        answer++;
        return;
      } else {
        targets.shift();
      }
    }
    const isValid = (a, b) => a >= 0 && b >= 0 && a < n && b < n;

    const DIRECTIONS = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    const [x, y] = cur;

    for (const [dx, dy] of DIRECTIONS) {
      const nx = x + dx;
      const ny = y + dy;
      if (isValid(nx, ny) && grid[nx][ny] === 0) {
        grid[nx][ny] = 'X';
        DFS([nx, ny], targets.slice());
        grid[nx][ny] = 0;
      }
    }
  }
  const start = targets[0];
  const [startX, startY] = start;

  grid[startX][startY] = 1;
  DFS(targets[0], targets.slice(1));

  return answer;
}

console.log(solution(grid, targets));
