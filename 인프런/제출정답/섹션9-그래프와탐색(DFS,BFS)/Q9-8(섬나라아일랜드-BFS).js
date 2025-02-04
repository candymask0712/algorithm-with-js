// * 모범 답안
function solution(arr) {
  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] === 0;
        queue.push([i, j]);
        answer++;
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let k = 0; k < arr.length; i++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < 7 && ny >= 0 && ny < 7 && arr[nx][ny] === 1) {
              arr[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  return answer;
}

// 4차 - 성공
function solution(arr) {
  let answer = 0;
  const n = arr.length;
  const m = arr[0].length;
  const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < m;
  function BFS(s) {
    const q = [s];
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    while (q.length) {
      const [x, y] = q.shift();
      d;
      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (isValid(nx, ny) && arr[nx][ny] === 1) {
          arr[nx][ny] = 0;
          q.push([nx, ny]);
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        answer++;
        arr[i][j] = 0;
        BFS([i, j]);
      }
    }
  }
  return answer;
}

// * 3차 답안 - 성공
function solution(arr) {
  let answer = 0;
  let n = arr.length;

  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const isCheck = (x, y) => {
    let que = [[x, y]];
    console.log(que);
    while (que.length > 0) {
      let v = que.shift();
      for (let i = 0; i < dx.length; i++) {
        let a = v[0] + dx[i];
        let b = v[1] + dy[i];
        if (a >= 0 && a < n && b >= 0 && b < n && arr[a][b] === 1) {
          arr[a][b] = 0;
          que.push([a, b]);
        }
      }
    }
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        console.log('i', i, 'j', j, 'arr', arr);
        isCheck(i, j);
        answer++;
      }
    }
  }
  return answer;
}

// * 2차 답안  - 성공
function solution(arr) {
  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const BFS = (x, y) => {
    // ! 별도 함수정의 없이 한 번에 표현
    let queue = [];
    queue.push([x, y]);

    while (queue.length > 0) {
      let v = queue.shift();
      // ! 축약 으로 정의 let [x, y] = queue.shift()

      for (let i = 0; i < dx.length; i++) {
        let a = v[0] + dx[i];
        let b = v[1] + dy[i];
        if (a >= 0 && a < 7 && b >= 0 && b < 7 && arr[a][b] === 1) {
          arr[a][b] = 0;
          queue.push([a, b]);
        }
      }
    }
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        answer++;
        arr[i][j] = 0;
        BFS(i, j);
      }
    }
  }
  return answer;
}

let list = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0]
];

console.log(solution(list));

// * 1차 답안 - 실패
function solution(arr) {
  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        queue.push();
        while (queue.length) {
          for (let k = 0; k < arr.length; i++) {
            let ni = i + dx[k];
            let nj = j + dy[k];
          }
        }
      }
    }
  }
  return answer;
}
