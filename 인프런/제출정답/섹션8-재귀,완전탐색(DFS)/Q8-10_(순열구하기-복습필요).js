// 모범 답안
function solution(m, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));

// 5차 - 성공
function solution(arr, m) {
  let answer = [];
  const n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(s);
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] !== 1) {
          ch[i] = 1;
          DFS(L + 1, s + arr[i]);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0, '');
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(arr, 2));

// * 4차 풀이 - 모범 답안 보고 재풀이 - 성공 (but 부분적 이해 안되서 노트)
function solution(arr, m) {
  let n = arr.length;
  let answer = [];
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    console.log('L', L, 'ch', ch, 'tmp', tmp);
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          // ! tmp는 할당 개념이라 별도 리셋 필요 없음
          DFS(L + 1);
          ch[i] = 0;
          // ! ch의 i에 대해 리셋해야되는 이유?
          // ! DFS는 한 번 가지가 뻗어 나갔다면 알아서 그 가지는 계속 진행 됨
          // ! 1레벨에서 첫 번째 가지에서 3을 사용하여 체크했더라도
          // ! 1레벨 2번째 가지 (6으로 시작) 부터는 다시 사용하기 위해 체크 해제 필요
          // ! ✨✨DFS(L+1) 의 바로 다음라인 부터는 이미 한쪽 가지의 탐색은 끝난 상태✨✨
        }
      }
    }
  }
  DFS(0);
  return answer;
}
let arr = [3, 6, 9];
console.log(solution(arr, 2));

// * 3차 풀이 - 성공
function solution(total, pick) {
  let answer = [];
  function DFS(L, w) {
    if (L === pick) {
      if (w.length > 0) answer.push(w);
    } else {
      for (let i = 0; i < total.length; i++) {
        if (!w.includes(String(arr[i]))) DFS(L + 1, w + String(arr[i]));
      }
    }
  }
  DFS(0, '');
  return answer;
}

// * 2차 풀이 - 실패

// * 1차 풀이 - 실패
