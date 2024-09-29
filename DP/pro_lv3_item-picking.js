function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;
  const MAP_SIZE = 12;
  const map = Array.from({ length: MAP_SIZE }, () => Array(MAP_SIZE).fill(0));
  console.table(map);

  const n = rectangle.length;

  for (let tileIndex = 0; tileIndex < n; tileIndex++) {
    const tile = rectangle[tileIndex];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const [startX, startY, endX, endY] = tile;
        for (let a = startX; a < endX + 1; a++) {
          for (let b = startY; b < endY + 1; b++) {
            map[a][b] = 1;
          }
        }
      }
    }
  }
  const originalMap = JSON.parse(JSON.stringify(map));

  function DFS(x, y, steps) {
    console.warn(x, y, steps);
    if (x === itemX && y === itemY) {
      console.error('YES! : ', steps);
      map[x][y] = 1;
      return;
    }

    for (let i = 0; i < 4; i++) {
      let dx = [0, 0, 1, -1];
      let dy = [-1, 1, 0, 0];
      const nx = x + dx[i];
      const ny = y + dy[i];
      const isValid = (x, y) =>
        x >= 0 && x < MAP_SIZE - 1 && y >= 0 && y < MAP_SIZE - 1;

      console.info(
        nx,
        ny,
        isValid(nx, ny),
        isEdge(nx, ny, originalMap, MAP_SIZE),
        map[nx][ny] === 1
      );
      if (
        isValid(nx, ny) &&
        isEdge(nx, ny, originalMap, MAP_SIZE) &&
        map[nx][ny] === 1
      ) {
        map[nx][ny] = 0;
        DFS(nx, ny, steps + 1);
        // map[nx][ny] = 1;
      }
    }
  }
  map[characterX][characterY] = 0;
  console.table(JSON.parse(JSON.stringify(map)));
  DFS(characterX, characterY, 0);

  console.table(map);

  return answer;
}

const isEdge = (x, y, arr, MAP_SIZE) => {
  for (let i = 0; i < 8; i++) {
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    const nx = x + dx[i];
    const ny = y + dy[i];
    const isValid = (x, y) =>
      x >= 0 && x < MAP_SIZE - 1 && y >= 0 && y < MAP_SIZE - 1;
    if (isValid(nx, ny) && arr[nx][ny] === 0) {
      return true;
    }
  }
  // console.warn('isNotEdge');
  return false;
};

console.info(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8]
    ],
    1,
    3,
    7,
    8
  )
); // 17
console.info(
  solution(
    [
      [1, 1, 8, 4],
      [2, 2, 4, 9],
      [3, 6, 9, 8],
      [6, 3, 7, 7]
    ],
    9,
    7,
    6,
    1
  )
); // 11
console.info(solution([[1, 1, 5, 7]], 1, 1, 4, 7)); // 9
console.info(
  solution(
    [
      [2, 1, 7, 5],
      [6, 4, 10, 10]
    ],
    3,
    1,
    7,
    10
  )
); // 15
console.info(
  solution(
    [
      [2, 2, 5, 5],
      [1, 3, 6, 4],
      [3, 1, 4, 6]
    ],
    1,
    4,
    6,
    3
  )
); // 10
