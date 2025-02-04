// 모범 답안
function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
    // n*의 오른쪽 부분에 계속 곱셈이 누적되는 구도
    // 나중에 n=1 되어 값이 1될때까지 반복
  }
  answer = DFS(n);
  return answer;
}
console.log(solution(5));

// 5차 - 정답
function solution(n) {
  let answer = 0;
  function DFS(L, s) {
    if (L === n) {
      answer = s;
      return;
    } else {
      DFS(L + 1, s * (L + 1));
    }
  }
  DFS(0, 1);
  return answer;
}

// * 4차 풀이 - 최적화 성공
const solution = (n) => {
  if (n === 1) return 1;
  return n * solution(n - 1);
};

// * 3차 풀이- 정답 보지 않고 풀이 성공!
function solution(n) {
  let answer;
  function DFS(L) {
    if (L === 1) return 1;
    else return L * DFS(L - 1);
  }
  answer = DFS(n);
  return answer;
}

console.log(solution(6));

// * 2차 풀이 - 풀이 실패
// 곱셈으로 리턴하는 부분 생소해서 실패
function solution(n) {
  let answer = 1;
  function DFS(L) {
    if (L === 1) return;
    else {
      answer *= DFS(L - 1);
      return answer;
    }
  }
  DFS(n + 1);
}

console.log(solution(5));

// * 1차 풀이
