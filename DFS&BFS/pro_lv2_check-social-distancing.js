// * 나의 풀이

function solution(places) {
  let answer = Array(5).fill(1);

  places = places.map((place) => {
    return place.map((row) => {
      return row.split('');
    });
  });

  const n = places.length;

  for (let i = 0; i < places.length; i++) {
    // 제출 전 5-> places.length로
    const place = places[i];
    // console.warn(i);
    for (let j = 0; j < place.length; j++) {
      for (let k = 0; k < place[0].length; k++) {
        if (place[j][k] === 'P') {
          place[j][k] = 'X';
          DFS(i, place, j, k, 0);
        }
      }
    }
  }

  function DFS(index, place, x, y, step) {
    // console.info(index, place, x, y, step);

    if (step === 2) {
      return;
    }

    for (let i = 0; i < 4; i++) {
      let dx = [0, 0, 1, -1];
      let dy = [-1, 1, 0, 0];
      const nx = x + dx[i];
      const ny = y + dy[i];
      const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < n;
      if (isValid(nx, ny) && place[nx][ny] !== 'X') {
        // console.info(x, y, nx, ny);
        if (place[nx][ny] === 'P') {
          // console.info(x, y, nx, ny);
          // console.info('@@', index);
          answer[index] = 0;
          return;
        }
        place[nx][ny] = 'X';
        DFS(index, place, nx, ny, step + 1);
        // place[nx][ny] = 'O';
      }
    }
  }

  return answer;
}

const arr = [
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX']
  // ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  // ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP']
];

console.info(solution(arr)); // [1,0,1,1,1]
