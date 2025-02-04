// * 모범 답안

function solution(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  // 별도 2차원 그래프 없이 좌표 이동을 위한 배열만 사용

  function DFS(x, y) {
    if (x === 6 && y === 6) answer++;
    else {
      for (let i = 0; i < board.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          // ! 2차원 배열 검색 시 정확한 범위 설정 중요
          // nx와 ny의 범위를 0~6으로 설정해 주지 않으면 오류남
          // Cannot read properties of undefined (reading '0')
          // 단순히 검색을 안하는 것이 아니라 board[nx][ny]를 찾을 수 없어
          // 전체 수식이 멈춰버리게 된다
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

// * 3차 - 성공
function solution(arr) {
  let answer = 0;
  const n = arr.length;
  const m = arr[0].length;

  const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < m;
  let dx = [0, 0, 1, -1];
  let dy = [-1, 1, 0, 0];
  function DFS(x, y) {
    if (x === n - 1 && y === m - 1) {
      answer++;
    } else {
      for (let i = 0; i < 4; i++) {
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

// * 2차 답안 - 성공
const solution = (arr) => {
  let answer = 0;
  let dx = [0, 0, 1, -1];
  let dy = [-1, 1, 0, 0];

  const DFS = (x, y) => {
    if (x === 6 && y === 6) {
      // ! 풀이지연 - 탈출조건 미수정으로 재귀가 헛돔
      // ! 다른 부분에서 길이 수정했는데 반영 안함
      answer++;
      return;
    } else {
      for (let i = 0; i < dx.length; i++) {
        let a = x + dx[i];
        let b = y + dy[i];
        console.log(a, b);
        if (a >= 0 && a < 7 && b >= 0 && b < 7) {
          // ! Cannot read properties of undefined 방지를 위해 배열값 사용시에는 유효값 들어가도록 처리
          if (arr[a][b] === 0) {
            arr[a][b] = 1;
            DFS(a, b);
            arr[a][b] = 0;
          }
        }
      }
    }
  };
  arr[0][0] = 1;
  // ! 이 부분때문에 풀이 지연 됨
  // ! DFS의 최초 조건 시에도 내부와 마찬가지의 조건 설정이 필요
  DFS(0, 0);
  console.log('answer', answer);
  return answer;
};

// * 1차 풀이 - 실패

function solution(arr) {
  let answer = 0;
  let ch = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  function DFS(v, k) {
    if (v === n && k === n) {
      answer++;
    } else {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {}
      }
    }
  }
  ch[0][0] = 1;
  DFS(0, 0);
  return answer;
}
