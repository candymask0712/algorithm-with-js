// * 1차 풀이
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const grid = input.slice(1).map((col) => col.split('').map(Number));

function solution(N, grid) {
  let answer = [];
  const isValid = (a, b) => a >= 0 && b >= 0 && a < N && b < N;

  function DFS(x, y, blocks) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (isValid(nx, ny) && grid[nx][ny] !== 0) {
        grid[nx][ny] = 0;
        blocks.push(`${nx}-${ny}`);
        DFS(nx, ny, blocks);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] !== 0) {
        // ! 처음에 숫자로 된 원시값을 전달하는 구조
        // ! 참조값이여야 업데이트 가능
        // ! 원시값의 경우 참고풀이 처럼 리턴값으로 전달해야 함
        let blocks = [];
        grid[i][j] = 0;
        DFS(i, j, blocks);
        answer.push(blocks.length + 1);
      }
    }
  }
  answer.sort((a, b) => a - b);
  console.log(answer.length);
  answer.forEach((num) => console.log(num));
}

solution(N, grid);

// * 참고 풀이
function findBlocks(input) {
  const n = parseInt(input[0], 10); // 지도 크기
  const map = input.slice(1).map((line) => line.split('').map(Number)); // 2D 배열로 변환
  const visited = Array.from({ length: n }, () => Array(n).fill(false)); // 방문 여부 기록
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // 상하좌우 방향
  const blockSizes = []; // 블록 크기 저장

  // DFS를 이용해 블록 탐색
  const dfs = (x, y) => {
    let size = 1;
    visited[x][y] = true;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        !visited[nx][ny] &&
        map[nx][ny] === 1
      ) {
        size += dfs(nx, ny);
      }
    }
    return size;
  };

  // 지도 전체 탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        // 새로운 블록 발견 시 DFS 시작
        const blockSize = dfs(i, j);
        blockSizes.push(blockSize);
      }
    }
  }

  // 블록 크기 오름차순 정렬
  blockSizes.sort((a, b) => a - b);

  // 출력
  console.log(blockSizes.length);
  blockSizes.forEach((size) => console.log(size));
}
function findBlocks(input) {
  const n = parseInt(input[0], 10); // 지도 크기
  const map = input.slice(1).map((line) => line.split('').map(Number)); // 2D 배열로 변환
  const visited = Array.from({ length: n }, () => Array(n).fill(false)); // 방문 여부 기록
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // 상하좌우 방향
  const blockSizes = []; // 블록 크기 저장

  // DFS를 이용해 블록 탐색
  const dfs = (x, y) => {
    let size = 1;
    visited[x][y] = true;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        !visited[nx][ny] &&
        map[nx][ny] === 1
      ) {
        size += dfs(nx, ny);
      }
    }
    return size;
  };

  // 지도 전체 탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        // 새로운 블록 발견 시 DFS 시작
        const blockSize = dfs(i, j);
        blockSizes.push(blockSize);
      }
    }
  }

  // 블록 크기 오름차순 정렬
  blockSizes.sort((a, b) => a - b);

  // 출력
  console.log(blockSizes.length);
  blockSizes.forEach((size) => console.log(size));
}
