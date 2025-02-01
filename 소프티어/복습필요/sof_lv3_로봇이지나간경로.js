// 첫번째 풀이

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [H, W] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((row) => row.split(''));

const DIRECTIONS = [
  [0, 2, '>'],
  [0, -2, '<'],
  [2, 0, 'v'],
  [-2, 0, '^'],
];

function getCommand(x, y, nx, ny, currentDirection) {
  let direction = '';
  let command = '';
  if (y + 2 === ny && x === nx) direction = '>';
  else if (y - 2 === ny && x === nx) direction = '<';
  else if (y === ny && x + 2 === nx) direction = 'v';
  else direction = '^';

  const combinedDirection = direction + currentDirection;

  if (['<>', '^v', '><', 'v^'].includes(combinedDirection)) command = 'RR';
  else if (['>v', 'v<', '<^', '^>'].includes(combinedDirection)) command = 'L';
  else if (['v>', '<v', '^<', '>^'].includes(combinedDirection)) command = 'R';
  else command = '';

  return [command, direction];
}

function solution(H, W, grid) {
  let count = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (grid[i][j] === '#') count++;
    }
  }

  count = (count - 1) / 2;

  const isValid = (a, b) => a >= 0 && b >= 0 && a < H && b < W;

  function DFS(x, y, firstDirection, currentDirection, commands, count) {
    if (count === 0) return [firstDirection, commands];

    for (const [dx, dy, sign] of DIRECTIONS) {
      const nx = x + dx;
      const ny = y + dy;
      const checkX = x + parseInt(dx / 2);
      const checkY = y + parseInt(dy / 2);
      if (
        isValid(nx, ny) &&
        grid[nx][ny] === '#' &&
        // ! 디버깅을 하면서 추가한 코드
        // !연결이 되어 있지 않음에도 이상한 경로로 가는 경우를 방지하기 위해 추가
        grid[checkX][checkY] === '#'
      ) {
        if (currentDirection === '') {
          if (y + 2 === ny && x === nx) currentDirection = '>';
          else if (y - 2 === ny && x === nx) currentDirection = '<';
          else if (y === ny && x + 2 === nx) currentDirection = 'v';
          else currentDirection = '^';
        }

        const [newCommand, newDirection] = getCommand(
          x,
          y,
          nx,
          ny,
          currentDirection
        );
        commands += newCommand + 'A';
        currentDirection = newDirection;
        if (firstDirection === '') firstDirection = newDirection;
        grid[x][y] = '.';
        if (sign === '^') grid[x - 1][y] = '.';
        if (sign === 'v') grid[x + 1][y] = '.';
        if (sign === '<') grid[x][y - 1] = '.';
        if (sign === '>') grid[x][y + 1] = '.';
        return DFS(nx, ny, firstDirection, currentDirection, commands, --count);
      }
    }
  }

  // 주위 3방향이 '.'인지 체크하는 함수
  function isStartPoint(x, y) {
    if (grid[x][y] !== '#') return false;
    let emptyCount = 0;
    const checkDirections = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (const [dx, dy] of checkDirections) {
      const nx = x + dx;
      const ny = y + dy;
      if (!isValid(nx, ny) || grid[nx][ny] === '.') {
        emptyCount++;
      }
    }
    return emptyCount >= 3; // 3개 이상이 '.'이면 시작점
  }

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      // ! 다른 풀이를 참고하여 추가
      if (isStartPoint(i, j)) {
        // 주위 3방향이 '.'인 경우에만 DFS 실행
        const [firstDirection, commands] = DFS(i, j, '', '', '', count);
        for (const output of [`${i + 1} ${j + 1}`, firstDirection, commands]) {
          console.log(output);
        }
        return;
      }
    }
  }
}

solution(H, W, grid);
