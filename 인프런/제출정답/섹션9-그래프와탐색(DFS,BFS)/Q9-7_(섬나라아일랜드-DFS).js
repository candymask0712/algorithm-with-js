// * 모범 답안
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  // 별도 체크용 그래프 없이 입력된 이차원 배열에서 1을 지워나감

  function DFS(x, y) {
    // 재귀함수의 형태로 붙어있는 섬이 나올때마다 지우는 함수
    arr[x][y] = 0;
    // 인자로 들어온 노드는 탐색했으므로 0으로 바꿈
    for (let i = 0; i < n; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 8방향에 대해 탐색할 수 있도록 새로운 x,y좌표 생성
      if (nx >= 0 && nx < 7 && ny >= 0 && ny < 7 && arr[nx][ny] === 1) {
        DFS(nx, ny);
        // 각 좌표가 배열 내 범위에 있고 1인 경우에 탐색 이어감
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        answer++;
        DFS(i, j);
        // 이중반복문을 통해 이차원배열의 모든 요소를 탐색함
        // 새 요소가 나오면 섬을 하나 추가하고 이어진 섬을 탐색(+붙어 있으면 다 지움)
      }
    }
  }
  DFS(0, 0);
  return answer;
}

// 4차 - 정답

function solution(arr) {
  let answer = 0;
  const n = arr.length;
  const m = arr[0].length;

  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < m;
  function DFS(x, y) {
    // ! 불필요한 조건문
    if (x > n || y > m) {
      return;
    } else {
      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (isValid(nx, ny) && arr[nx][ny] === 1 && graph[nx][ny] === 0) {
          console.info(nx, ny);
          graph[nx][ny] = 1;
          arr[nx][ny] = 0;
          DFS(nx, ny);
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        answer++;
        // ! 불필요한 조건무
        graph[i][j] = 1;
        DFS(i, j);
      }
    }
  }

  return answer;
}

// * 3차 답안 - 실패하여 답안 보고 일부 수정

function solution(arr) {
  let answer = 0;
  const q = [];
  // q.push([0, 0]);
  let dx = [0, 0, 1, -1];
  let dy = [-1, 1, 0, 0];

  const n = arr.length;
  const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < n;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] = 0;
        q.push([i, j]);
        answer++;
        while (q.length) {
          console.log('arr', JSON.parse(JSON.stringify(arr)), 'answer', answer);
          let [x, y] = q.shift();
          for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (isValid(nx, ny) && arr[nx][ny] === 1) {
              q.push([nx, ny]);
              arr[nx][ny] = 0;
            }
          }
        }
      }
    }
  }
  return answer;
}

function findNearbyLand(arr) {}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0]
];

console.log(solution(arr));

// * 2차 답안 - 성공 but 콘솔에 안뜨는 에러 확인 필요
function solution(arr) {
  const DFS = (x, y) => {
    for (let i = 0; i < arr.length; i++) {
      let a = x + dx[i];
      let b = y + dy[i];
      if (a >= 0 && a < 7 && b >= 0 && b < 7 && arr[a][b] === 1) {
        arr[a][b] = 0;
        DFS(a, b);
      }
    }
  };

  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        answer++;
        arr[i][j] = 0;
        DFS(i, j);
      }
    }
  }
  return answer;
}

// * 1차 답안 - 우연히 정답 도출 했으나 실패
// DFS로 2차원 배열 탐색은 구현했으나, 실제 풀이를 위한 로직 실패
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let ch = Array.from(Array(n), () => Array(n).fill(0));
  let dx = [0, 0, 1, -1];
  let dy = [-1, 1, 0, 0];

  function DFS(x, y) {
    if (x === n && y === n) {
      return answer;
    } else {
      if (
        x >= 0 &&
        x < n &&
        y >= 0 &&
        y < n &&
        ch[x][y] === 0 &&
        arr[x][y] === 1
      ) {
        ch[x][y] = 1;
        console.log('x/y', x, y);
        answer++;
        for (let i = 0; i < 4; i++) {
          let nx = x + dx[i];
          let ny = y + dy[i];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1)
            DFS(nx, ny);
        }
      }
    }
  }
  DFS(0, 0);
  return answer;
}
