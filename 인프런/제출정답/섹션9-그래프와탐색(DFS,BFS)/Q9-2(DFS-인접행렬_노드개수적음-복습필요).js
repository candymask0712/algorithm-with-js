// * 모범답안
function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  // 행렬 그래프용 빈 배열 작성
  let ch = Array.from({ length: n + 1 }, () => 0);
  // 검색한 경로 표시용 체크박스
  for (let [a, b] of arr) {
    // arr이 요소가 [1,2]처럼 2차원 형태라면 a=1, b=2 형태로 사용 가능
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) {
      // 목적지에 다다르면 answer 카운트를 올림
      answer++;
    } else {
      // 매 노드마다 다른 노드로 뻗는 간선 검색을 위해 for loop 작성
      for (let i = 1; i <= n; i++) {
        // 노드 v에서 노드 i로 가능 경로가 있고 && 거쳐왔다는 체크표시가 없다면
        if (graph[v][i] === 1 && ch[i] === 0) {
          // 이미 검색했다는 체크 표시를 하고
          ch[i] = 1;
          // 노드 i에서 부터 검색을 이어서 진행한다
          DFS(i);
          // 검색을 모두 진행했다면 체크박스를 해제한다
          ch[i] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  // 바로 DFS가 시작하므로 체크 해주어야 함
  DFS(1);
  return answer;
}

// 6차 -정답

function solution(n, arr) {
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  arr.forEach((el, i) => {
    // ! 구조분해 할당으로 깔끔하게 처리 가능
    const x = el[0];
    const y = el[1];
    graph[x][y] = 1;
  });

  answer = [];
  const m = arr.length;

  let ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(p, s) {
    if (p === n) {
      // ! ch 배열 적용 시 조건은 필요 없음
      if (answer.indexOf(s) === -1) answer.push(s);
    } else {
      for (let i = 1; i < m; i++) {
        if (graph[p][i] === 1 && ch[p] === 0) {
          // ! 다음 도착할 곳에 대해 ch=1로 해주는게 맞음
          ch[p] = 1;
          DFS(i, s + i);
          ch[p] = 0;
        }
      }
    }
  }
  // ! 원래는 이 부분에 ch[1] 해주어야 함
  DFS(1, '1');
  return answer.length;
}

// * 5차 풀이 - 성공 (BFS 접근 및 배열로 진행상황 보려다 시간 지연)
// ! 시간은 지연 되었으나 풀이에 필요한 구조분해 할당, 인수 최소화 등은 성공

function solution(n, arr) {
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  let ch = Array.from({ length: n + 1 }, () => 0);
  let answer = 0;

  console.log(graph);

  function DFS(L, a) {
    if (L === n) {
      answer++;
      console.log(a);
    } else {
      for (let i = 1; i <= n + 1; i++) {
        if (graph[L][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i, a + i);
          ch[i] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  // ! DFS의 두 번째 인자는 진행 상황을 보기 위함
  // ! 이것을 처음에 배열로 보려다가 시간지연 (되도록 심플하게 문자열로 보자)
  DFS(1, '1');
  return answer;
}

// * 4차 풀이 - 성공 (but BFS로 접근해서 시간지연)
// ! 최단거리가 아닌 갈 수 있는 경로 탐색이기 때문에 DFS가 맞음
// ! DFS 적용 시에도 인자를 하나만 넣기 불안해서 제대로 구현 못함 => 개념적으로 맞다면 자신감 필요
function solution(n, arr) {
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  // ! arr이 이차원 배열일 경우 아래와 같이 구조분해할당 가능
  // ! for(let [a,b] of arr) { graph[a][b]=1 }
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i][0];
    let y = arr[i][1];
    graph[x][y] = 1;
  }

  let ch = Array.from({ length: n + 1 }, () => 0);
  let answer = 0;
  let answerArr = [];
  function DFS(L, c, a) {
    if (c === 5) {
      answer++;
      answerArr.push(a);
      return;
    }
    if (L === n) return;
    else {
      for (let i = 0; i < arr.length; i++) {
        if (graph[c][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(L + 1, i, a + i);
          ch[i] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1, 1, '1');
  console.log(answerArr);
  return answer;
}

// * 3차 풀이 - BFS 방식으로 작성하다 실패

function solution(n, arr) {
  // debugger
  let queue = [];
  let answer = 0;
  let m = Math.max(...arr.flat());
  let ch = Array.from({ length: m + 1 }, () => 0);
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  console.log(graph);

  queue.push(1);

  let count = 0;
  while (queue.length > 0 && count < 30) {
    count++;
    let tmp = queue.shift();
    if (tmp === n) {
      answer++;
    }
    ch[tmp] = 1;
    console.log('tmp', tmp, 'ch', ch, 'queue', queue);
    for (let i = 1; i < m + 1; i++) {
      if (ch[i] === 0 && graph[tmp][i] === 1) {
        queue.push(i);
        ch[i] = 1;
        //  console.log(queue)
      }
    }
  }
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5]
];

console.log(solution(5, arr));

// * 3차 풀이 - 실패 (BFS로 접근해서 실패)
function solution(n, arr) {
  // debugger
  let answer = 0;
  let m = Math.max(...arr.flat());
  let ch = Array.from({ length: m + 1 }, () => 0);
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(L) {
    if (L >= n) {
      if (L === n) answer++;
      return;
    } else {
      for (let i = 1; i <= m; i++) {
        console.log(ch);
        if (ch[i] === 0 && graph[L][i] === 1) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
          // ! 다시 체크 해제하는 부분 때문에 시간 지연
          // ! 무조건 재방문 안하는 것이 아닌 한 줄기 내에서만 재방문 하지 말아야 함
          // ! DFS/BFS는 식 세우기 전에 로직을 분석/파악이 중요
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}

// * 2차 풀이 - 일부 작성했으나 빠진 부분 많음

function solution(n, arr) {
  let answer = 0;
  let ch = Array.from({ length: n + 1 }, () => 0);
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  // 1차원 / 2차원 그래프 만드는 매서드 암기필요

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  // 이부분 풀이 때 작성하지 않음

  function DFS(v) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 1; i < graph.length; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          // 처음에 ch[i]===0이 아닌 ch[v]===0으로 작성
          // 종착지가 기준이 되어야 함
          ch[v] = 1;
          DFS(v + 1);
          ch[v] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}

// * 1차 풀이 - 답안 복사
