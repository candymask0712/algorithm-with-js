// 나의 풀이
function solution(arr) {
  let answer = 0;
  let start = [];
  let lever = [];
  let end = [];

  const n = arr.length;
  const m = arr[0].length;

  arr = arr.map((row, rowIndex) => {
    subArr = row.split('');
    subArr.forEach((col, colIndex) => {
      if (col === 'S') start = [colIndex, rowIndex];
      if (col === 'L') lever = [colIndex, rowIndex];
      if (col === 'E') end = [colIndex, rowIndex];
    });
    return subArr;
  });

  function BFS(x, y, step) {
    let queue = [];
    queue.push([x, y, step]);
    let cnt = 0;
    while (queue.length && cnt < 1000) {
      cnt++;
      const current = queue.shift();
      let [x, y, step, isLeverOn] = current;

      const [endRow, endCol] = end;
      const [leverRow, leverCol] = lever;

      // console.info(x, y, step, isLeverOn);
      // console.table(JSON.parse(JSON.stringify(arr)));
      // console.error(endRow, endCol);

      if (x === endRow && y === endCol && isLeverOn) {
        // console.warn('');
        answer = step;
        return;
      }

      for (let i = 0; i < 4; i++) {
        let dx = [0, 0, 1, -1];
        let dy = [-1, 1, 0, 0];
        const nx = x + dx[i];
        const ny = y + dy[i];
        const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < m;
        if (isValid(nx, ny) && arr[nx][ny] !== 'X') {
          if (arrp[nx][ny] === 'V') arr[nx][ny] = 'V';
          if (nx === leverRow && ny === leverCol) {
            isLeverOn = true;
          }
          queue.push([nx, ny, step + 1, isLeverOn]);
        }
      }
    }
  }
  const [startRow, startCol] = start;
  // arr[startRow][startCol] = 0
  BFS(startRow, startCol, 0, false);

  return answer === 0 ? -1 : answer;
}

console.info(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE'])); // 16
console.info(solution(['LOOXS', 'OOOOX', 'OOOOO', 'OOOOO', 'EOOOO'])); // -1
