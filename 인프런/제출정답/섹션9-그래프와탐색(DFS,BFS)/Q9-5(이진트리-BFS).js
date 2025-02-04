//* BFS는 레벨 단위 탐색이자 최단 거리 탐색

// * 모범 답안

function solution() {
  let answer = '';
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + ' ';
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());

// 6차 - 정답

function solution(n) {
  let answer = [];
  const q = [1];

  let cnt = 0;
  while (q.length > 0 && cnt < 100) {
    cnt++;
    const el = q.shift();
    answer.push(el);
    // ! 인자 넣는 방식이 모범 답안이 더 좋아 보임
    if (el < 4) {
      q.push(2 * el);
      q.push(2 * el + 1);
    }
  }
  return answer;
}

console.log(solution(7));

// * 5차 풀이 - 실패(답은 구했으나 로직 엉성)

function solution() {
  let answer = '';
  let q = [1];
  let cnt = 0;
  let el = 1;

  while (q.length > 0 && el < 7 && cnt < 10) {
    el = q.shift();
    answer += el;
    q.push(el * 2);
    q.push(el * 2 + 1);
    cnt++;
  }

  return answer;
}

console.log(solution());

// * 4차 풀이 - 성공

function solution(n) {
  let answer = [];
  let que = [];

  que.push(1);

  while (que.length > 0) {
    let v = que.shift();
    answer.push(v);
    if (v <= 3) {
      for (let nv of [v * 2, v * 2 + 1]) {
        que.push(nv);
      }
    }
  }
  return answer;
}

console.log(solution(7));

// * 3차 풀이 - 풀이성공 (답과는 로직 다름)

function solution(n) {
  let answer = [1];
  let queue = [1];

  function BFS(v) {
    if (queue.length === 0) return;
    else if (v * 2 + 1 <= n) {
      answer.unshift();
      answer.push(v * 2);
      answer.push(v * 2 + 1);
      BFS(v * 2);
      BFS(v * 2 + 1);
    }
  }
  BFS(1);
  return answer;
}

console.log(solution(7));

// * 2차 풀이 - 풀이 성공(개념오류로 변수명 설정오류)
function solution(V) {
  let answer = '';
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let nv = queue.shift();
    answer += nv + ' ';
    for (nv of [nv * 2, nv * 2 + 1]) {
      // 위에서 shift 된 요소에 대해 for문이 도는 것인데
      // 이해 부족으로 변수명을 nv로 동일하게 설정
      // 위에는 v, 밑에는 nv가 되어야 함
      if (nv > V) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution(7));

// * 1차 풀이 - 풀이 실패(오답)
function solution(n) {
  let answer = [];
  function DFS(L) {
    if (L >= n + 1) {
      answer.push(L);
      return;
    } else {
      DFS(L * 2);
      DFS(L * 2 + 1);
      // answer.push(L);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(7));
