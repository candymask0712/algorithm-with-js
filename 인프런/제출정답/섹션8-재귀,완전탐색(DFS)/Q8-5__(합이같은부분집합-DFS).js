// 모범 답안
function solution(arr) {
  let answer = 'NO',
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (sum === total / 2) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

// 4차 -성공
const solution = (arr) => {
  const n = arr.length;
  const halfSum = arr.reduce((acc, el) => acc + el, 0) / 2;
  let flag = 0;
  let answer = 'NO';
  function DFS(L, s) {
    if (flag === 1) return;
    if (L === n) {
      if (s === halfSum) {
        flag = 1;
        answer = 'YES';
      }
    } else {
      DFS(L + 1, s + arr[L - 1]);
      DFS(L + 1, s);
    }
  }
  DFS(1, 0);
  return answer;
};

// * 5차 풀이 - 성공 but 알고리즘 비효율, 풀이에 사족

const solution = (arr) => {
  let halfSum = arr.reduce((a, b) => a + b) / 2;
  let answer = 'NO';
  let n = arr.length;

  function DFS(L, s) {
    // ! flag 설정 안함
    // ! 답안 벗어난 케이스에 대해 개별 리턴 => 해당 건만 중단 됨 (127회 반복)
    // ! DFS 자체에 flag로 리턴 적용 시 => 스택에 쌓여 있는 DFS 모두 중간 (19회 반복)
    if (s === halfSum) {
      answer = 'YES';
      return;
    }
    if (s > halfSum || L > n - 1) return;
    // ! 조건설정에 사족이 있음
    // ! 여기에서 L은 arr의 index이자 레벨 개념이므로
    // ! L이 특정값에 도달하는 것만으로도 충분한 종료조건
    else {
      DFS(L + 1, s + arr[L - 1]);
      DFS(L + 1, s);
    }
  }

  DFS(1, 1);
  return answer;
};
let arr = [1, 3, 5, 6, 7, 10];

console.log(solution(arr));

// 4차 풀이 - 답은 나왔으나 불필요한 부분이 있고 풀이 해맴
function solution(arr) {
  let answer = 'NO';
  let n = arr.length;
  let sum = arr.reduce((a, b) => a + b, 0);
  let flag = 0;

  let ch = Array.from({ length: n }, () => 0);
  // 부분집합 자체를 구할 때만 필요한 부분
  function DFS(L) {
    if (flag === 1) return;
    if (L === n + 1) {
      let tmp = 0;
      for (let i = 0; i < n; i++) {
        if (ch[i] === 1) tmp += arr[i];
      }
      if (tmp === sum / 2) {
        answer = 'YES';
        // 처음에 return "YES" 라고 적어 답 도출 지연
        // 재귀 다음 라인에 return으로 answer 선언해 둔 부분 주의
        flag = 1;
      }
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

// 3차 풀이
function solution(arr) {
  let answer = 'NO';
  let total = arr.reduce((a, b) => a + b);
  let flag = 0;
  function DFS(v, sum) {
    if (flag) return;
    if (v === arr.length) {
      if (sum === total / 2) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      DFS(v + 1, sum + arr[v]);
      // 윗 줄에서 v를 i로 놓아 해맴
      DFS(v + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
const arr = [1, 2, 3];
console.log(solution(arr));

// 2차 풀이 - 풀이 성공 및 1차 대비 코드 축소
// 그러나 이진트리 순회를 하면서 동시에 합도 계산하는 답안 대비 부족
function solution(arr) {
  let answer = 'NO';
  let sum = arr.reduce((a, b) => a + b);
  let flag = 0;
  let ch = Array.from({ length: arr.length }, () => 0);
  let n = arr.length;
  function DFS(v) {
    if (flag === 1) return;
    // 괄호 안을 그냥 flag로 생략 가능
    if (v === arr.length) {
      let tmp = 0;
      for (let i = 1; i < n + 1; i++) {
        if (ch[i] === 1) tmp += arr[i];
      }
      if (tmp === sum / 2) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(0);
  return answer;
}
const arr = [1, 2, 3];
console.log(solution(arr));

// 1차 풀이 - 풀이 성공 but 비효율적
function solution(arr) {
  let n = arr.length;
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0); // 모든 요소가 0인 길이 n+1 배열 생성
  function DFS(v) {
    if (v === n) {
      let el = arr.reduce((acc, cur, idx) => {
        if (ch[idx] === 1) return (acc += cur);
        else return acc;
      }, '');
      if (el.length > 0) answer.push(el);
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(0);

  answer = answer.map((el) => {
    let arr = el.split('');
    return arr.reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
  });

  answer = answer.some((el) => {
    return arr.indexOf(el) === arr.indexOf(el);
  });

  if (answer) return 'YES';
  else return 'NO';
}

const arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
