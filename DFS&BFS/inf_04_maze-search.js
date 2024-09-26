// * 문제
// 7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요. 출발점은 격
// 자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다. 격자판의 1은 벽이고, 0은 통로이다. 격
// 자판의 움직임은 상하좌우로만 움직인다. 미로가 다음과 같다면

// 위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다.
// ▣ 입력설명
// 7*7 격자판의 정보가 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 경로의 가지수를 출력한다.

// * 나의 풀이
function solution(arr) {
  let answer = 0;
  const n = arr.length;
  const m = arr[0].length;
  const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < m;

  function DFS(x, y) {
    console.info(x, y);
    if (x === n - 1 && y === m - 1) {
      answer++;
    } else {
      for (let i = 0; i < 4; i++) {
        let dx = [0, 0, 1, -1];
        let dy = [-1, 1, 0, 0];
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (isValid(nx, ny) && arr[nx][ny] === 0) {
          arr[nx][ny] = 1;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }
      }
    }
  }
  arr[0][0] = 1;
  DFS(0, 0);

  return answer;
}

const arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0]
];
console.info(solution(arr));
