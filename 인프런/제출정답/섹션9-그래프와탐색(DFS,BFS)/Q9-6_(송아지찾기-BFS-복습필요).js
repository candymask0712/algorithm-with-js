// * 모범 답안
function solution(s, e) {
  // 찾은 노드의 검색여부를 체크하는 배열
  let ch = Array.from({ length: 10001 }, () => 0);
  // 검색한 노드의 깊이 레벨을 표시할 배열
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  // 초기값 검색여부 체크
  ch[s] = 1;
  // 초기값 1을 큐에 넣어서 BFS식 탐색시작
  queue.push(s);
  // 처음에는 0레벨로 시작
  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      // 정답 값이 나오면 바로 식 종료
      if (nx === e) return dis[x] + 1;
      // 에러 방지를 위해 BFS탐색 시에는 조건 설정 중요
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        // 각 레벨마다 이전 레벨에 1을 추가하여 구분
        dis[nx] = dis[x] + 1;
      }
    }
  }
}

// 6차 - 정답
function solution(s, e) {
  let queue = [];
  // ! 재방문여부 체크 필요
  queue.push([s, 0]);
  let cnt = 0;
  while (queue.length && cnt < 1000) {
    let v = queue.shift();
    cnt++;
    if (v[0] === e) return v[1];
    for (let nv of [v[0] + 1, v[0] - 1, v[0] + 5]) {
      if (nv >= 1) queue.push([nv, v[1] + 1]);
    }
  }
}

// * 5차 답안 - 식 복잡하고 재방문에 대한 고려 하지 않음

function solution(s, e) {
  let answer = 0;
  let q = [];
  q.push([s, 0]);

  while (q.length) {
    answer++;
    let x = q.shift();
    const current = x[0];
    const trial = x[1] + 1;
    if (current === e) return trial - 1;

    for (let nv of [
      [current + 1, trial],
      [current - 1, trial],
      [current + 5, trial]
    ]) {
      q.push(nv);
    }
  }
}

// * 4차 답안 - 답안 보고 추가
function solution(s, e) {
  let answer = 0;
  let que = [[s, 0]];
  let flag = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  // ! 이미 탐색한 값을 체크할 수있는 배열을 만들고

  while (que.length > 0 || flag === 1) {
    let v = que.shift();
    if (v[0] === e) {
      flag = 1;
      return v[1];
    }
    for (let nv of [v[0] + 1, v[0] - 1, v[0] + 5]) {
      if (ch[nv] === 0) {
        // ! 탐색하지 않은 값만 큐에 추가
        console.log(que);
        que.push([nv, v[1] + 1]);
        ch[nv] = 1;
      }
    }
  }
  return answer;
}

// console.log(solution(5,14))
console.log(solution(8, 3));

// * 3차 답안 - 성공 (but 시간 복잡도 과함)
function solution(s, e) {
  let answer = 0;
  let que = [[s, 0]];
  let flag = 0;

  while (que.length > 0 || flag === 1) {
    let v = que.shift();
    if (v[0] === e) {
      flag = 1;
      return v[1];
    }
    for (let nv of [v[0] + 1, v[0] - 1, v[0] + 5]) {
      console.log(que);
      que.push([nv, v[1] + 1]);
    }
  }
  return answer;
}

// console.log(solution(5,14))
console.log(solution(8, 3));

// * 2차 답안 - 풀이 성공
function solution(s, e) {
  let queue = [];
  let ch = Array.from({ length: 100 }, () => 0);
  // ! 입력 범위가 ~10,000까지이므로 길이도 10,000으로 해야함
  queue.push([s, 0]);
  // ! 모범 답안과는 달리 값 안에서 레벨을 관리

  while (queue.length > 0) {
    let v = queue.shift();
    if (v[0] === e) return v[1];
    ch[v[0]] = 1;
    if (v[0] <= 14) {
      for (let nv of [1, -1, 5]) {
        if (v[0] + nv > 0 && v[0] + nv < 15 && ch[v[0] + nv] === 0) {
          queue.push([v[0] + nv, v[1] + 1]);
          ch[[0] + nv];
        }
      }
    }
  }
}
console.log(solution(8, 3));

// * 1차 답안 - 답 보고 풀이
function solution(s, e) {
  let answer = 0;
  let queue = [s];
  let flag = 0;

  while (flag === 0) {
    let v = queue.shift();
    answer++;
    for (let nv of [v + 1, v - 1, v + 5]) {
      if (nv > e) continue;
      queue.push(nv);
      if (nv === e) flag = 1;
    }
  }

  let arr = [0];
  let tmp = 0;
  for (let i = 1; i < 100; i++) {
    tmp += 3 ** i;
    arr.push(tmp);
    if (arr[i - 1] < answer && arr[i] > answer) {
      answer = i + 1;
    }
  }

  return answer;
}
