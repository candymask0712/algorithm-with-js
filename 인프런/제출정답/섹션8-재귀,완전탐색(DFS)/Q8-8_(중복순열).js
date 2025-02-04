// !이 문제는 개념적으로는 다중for문과 유사
// ! 그러나 들어오는 인자 n이 커질 경우 for문으로는 대응 어려움
// ! 재귀함수를 이용해 동적으로 대응해야함

// * 모범 답안
function solution(n, m) {
  // 가지수는 n이고 깊이는 m인 이진트리 탐색
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  // m개를 뽑기위해 길이가 m인 배열 생성

  function DFS(L) {
    if (L === m) {
      // 원하는 깊이 m에 도달 시 멈추고 값 도출
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; j++) {
        // n에 맞게 깊이 별 가지 생성
        // 처음에는 for 문이 else로 들어올 때마다
        // 생성되어 무한루프에 가깝다고 착각
        // for 문은 한 번 생성되어 동적으로 재귀 생성 후 사라짐
        tmp[L] = i;
        // 길이가 m인 배열에 1~n 까지의 값을 넣어줌
        DFS(L + 1);
        // 계속 해서 재귀로 깊이 생성
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2));

// 5차 - 성공
function solution(n, p) {
  const answer = [];
  function DFS(L, r) {
    if (L === p) {
      answer.push(r);
    } else {
      for (let i = 1; i <= n; i++) {
        DFS(L + 1, r + i);
      }
    }
  }
  DFS(0, '');
  return [answer, answer.length];
}

// * 4차 풀이 - 성공
// ! 처음에 ch 배열 생성 하여 문제풀이 시도하다 실패
function solution(total, pick) {
  let answer = [];
  function DFS(L, w) {
    if (L === pick) {
      if (w.length > 0) answer.push(w);
    } else {
      for (let i = 1; i <= total; i++) {
        DFS(L + 1, w + String(i));
      }
    }
  }
  DFS(0, '');
  return answer;
}

console.log(solution(3, 2));

// * 3차 풀이 - 영상 시청 후 혼자 풀이
function solution(total, pick) {
  // total은 전체 대상 숫자
  // pick은 그 중에서 고를 숫자 개수를 의미
  let answer = [];
  let tmp = Array.from({ length: pick }, () => 0);
  // 고를 숫자의 길이만큼 배열 생성하기
  // 이후 재귀에서 동적으로 여기에 값을 담아줌
  function DFS(L) {
    if (L === pick) {
      answer.push(tmp.slice());
      // 배열은 반드시 얕은복사 이상을 해주어야 함
      // 그렇지 않으면 최종 값 기준으로 기존 배열들이
      // 전부 [3, 3] 이런식으로 값이 변하게 됨
    } else {
      for (let i = 1; i <= total; i++) {
        // for문이 가지의 개수만큼 돌아야 함
        // i는 실제로 정답에 찍히는 숫자이므로 1부터 시작
        tmp[L] = i;
        // tmp의 L번째 자리에 유동적으로 i를 할당
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  // 깊이의 넘버링과 정답도출은 무관하므로 0부터 시작
  return answer;
}

console.log(solution(3, 2));

// * 2차 풀이 - 실패
function solution(total, pick) {
  let answer = [];
  let ch = Array.from({ length: total }, () => 0);
  function DFS(L) {
    if (L === pick) {
      let tmp = '';
      for (let k = 0; k < total; k++) {
        if (ch[k] === 1) tmp += k + 1;
      }
      if (tmp.length > 0) answer.push(tmp);
    } else {
      for (let i = 0; i < pick; i++) {
        ch[L] = 1;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2));

// * 1차 풀이  - 실패
function solution(i, p) {
  let ch = Array.from({ length: i }, () => 0);

  function DFS(L) {
    if (L === p) {
      for (let k = 0; k < p; k++) {
        if (ch[k] === 1) {
        }
      }
    } else {
      for (let j = 0; j < i; j++) {
        ch[i] = 1;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
}

console.log(solution(index, pick));
