// 모범 답안
function solution(n, r) {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}
console.log(solution(5, 3));

// 5차 - 실패(메모이제이션 부분 강의 참고)
function solution(n, r) {
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  function DFS(n, r) {
    // ! 메모이제이션 된 부분 먼저 리턴하는 것이 좋음
    // ! 이 부분 불필요한 부분 있음
    if (n === 1 || r === 0 || n === r) return 1;
    else {
      if (graph[n][r] === 0) graph[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
      return graph[n][r];
    }
  }
  return DFS(n, r);
}

// * 4차 풀이 - 실패
const solution = (n, r) => {
  let graph = Array.from(Array(n + 1), () => Array(r + 1).fill(0));
  function DFS(n, r) {
    // ! 메모리제이션에 저장된 값 있을 때 바로 저장된 값 사용하는 코드 구현 실패
    // ! if(dy[n][r]>0) return dy[n][r];
    if (r === 1) return n;
    if (r >= n) return 1;
    else {
      graph[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
      return graph[n][r];
      // ! 위 두줄의 경우 한 줄에 쓰기 가능 => 할당 & 계산 동시처리
    }
  }
  return DFS(n, r);
};

// 3차 풀이
function solution(n, r) {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));

// 2차 풀이
function solution(number, pick) {
  let answer;
  function DFS(n, p) {
    if (n === 0) return 0;
    else if (n === p || p === 0) return 1;
    // 처음에 두 번째 조건을 n===0 으로 설정하여 실패
    // n===0 일 때도 경우의 수가 1가지이긴 하나
    // p가 0 일 때가 먼저 나오므로 p로 설정해야 함
    else {
      console.log('n', n, 'p', p);
      return DFS(n - 1, p - 1) + DFS(n - 1, p);
    }
  }
  answer = DFS(number, pick);
  return answer;
}

console.log(solution(5, 3));

// 1차 풀이 - 답은 맞았으나 메모리제이션 개념 적용 X

// nCr = n!/(n-r)!r!
//조합의 경우의 수 공식
// nCr = n-1Cr-1 + n-1Cr
// 위와 같이 표현도 가능
// 한 원소 a가 있을 때 아래 두개로 경우가 생긴다
// (a가 포함된 경우) + (a가 포함되지 않은 경우)

Array.from(Array(행개수), () => Array(열개수).fill(0));
// 2차원 배열 만들기
Array.from({ length: 원소개수 }, () => 0);
// 1차원 배열 만들기

function solution(number, pick) {
  let answer = 0;
  function DFS(n, p) {
    if (n === p) {
      answer += 1;
    } else if (p === 1) {
      answer += n;
    } else {
      DFS(n - 1, p);
      DFS(n - 1, p - 1);
    }
  }
  DFS(number, pick);
  return answer;
}

console.log(solution(33, 19));
