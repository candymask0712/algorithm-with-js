// * 모범답안

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  // 행의 개수는 노드의 개수만큼 생성(n개, 단 0을 제외함)
  // 열의 개수는 빈 배열로 생성
  for (let [a, b] of arr) {
    graph[a].push(b);
    // a에서 갈수 있는 경로를 나타내는 graph[a]에 갈수있는 노드 b를 넣어줌
  }

  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}

// 6차 - 성공
function solution(n, arr) {
  let graph = Array.from({ length: n + 1 }, () => []);

  for (let [a, b] of arr) {
    console.info(a, b);
    graph[a].push(b);
  }
  answer = [];

  let ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(p, s) {
    if (p === n) {
      answer.push(s);
    } else {
      for (const el of graph[p]) {
        if (ch[el] === 0) {
          ch[el] = 1;
          DFS(el, s + el);
          ch[el] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1, '1');
  return answer.length;
}

// * 5차 풀이 - 성공
function solution(n, arr) {
  let graph = Array.from(Array(n + 1), () => Array());
  console.log(graph);
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  let ch = Array.from({ length: n + 1 }, () => 0);
  let answer = 0;

  console.log(graph);

  function DFS(L, a) {
    if (L === n) {
      answer++;
      console.log(a);
    } else {
      for (let nv of graph[L]) {
        if (ch[nv] === 0) {
          ch[nv] = 1;
          DFS(nv, a + nv);
          ch[nv] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1, '1');
  return answer;
}

// * 4차 풀이 - 성공!
function solution(n, arr) {
  let graph = Array.from(Array(n + 1), () => Array(0));
  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  let ch = Array.from({ length: n + 1 }, () => 0);
  let answer = 0;
  function DFS(L) {
    if (L === n) {
      answer++;
      // ! if로 들어온 경우 retrun이 없더라도 else로 들어가지 않아 불필요한 부분
      return;
    } else {
      // ! for of를 사용하여 풀이보다 깔끔하게 구현
      for (let nv of graph[L]) {
        if (ch[nv] === 0) {
          ch[nv] = 1;
          DFS(nv);
          ch[nv] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}

// * 3차 풀이 - 해설 개념 보고 구현
function solution(n, arr) {
  // debugger
  let answer = 0;
  let m = Math.max(...arr.flat());
  let ch = Array.from({ length: m + 1 }, () => 0);
  let graph = Array.from(Array(n + 1), () => Array(0));
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  console.log(graph);

  function DFS(L) {
    if (L >= n) {
      if (L === n) answer++;
      return;
    } else {
      for (let i = 0; i <= graph[L].length; i++) {
        console.log(ch);
        if (ch[graph[L][i]] === 0) {
          ch[graph[L][i]] = 1;
          DFS(graph[L][i]);
          ch[graph[L][i]] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}

//  * 2차 풀이 - 실패
function solution(n, arr) {
  let answer = 0;
  let ch = Array.from({ length: n + 1 }, () => 0);
  let graph = Array.from(Array(n + 1), () => Array());
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  console.log(graph);
  function DFS(v) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 1; i < graph[v].length; i++) {
        // ! for 문 조건 설정 실수로 풀이 실패
        // 전 문제와 달리 for 문의 index가 노드를 의미하는게 아님
        // 따라서 0번째 인덱스 부터 탐색 필요
        if (ch[i] === 0) {
          // ch[i] 인지 ch[graph[v][i]]인지 헷갈려서 혼동
          ch[graph[v][i]] = 1;
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}

// * 1차 풀이 - 실패
