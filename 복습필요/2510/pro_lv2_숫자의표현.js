// * 문제

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// ? 시간복잡도: O(n)
//  rp는 최대 n번
//  lp는 최대 n번
//  둘을 합쳐도 최대 2n번 이하
//  따라서 O(n)
// ? 공간복잡도: O(1)
function solution(n) {
  let lp = 1;
  let answer = 0;
  let sum = 0;
  for (let rp = 1; rp <= n; rp++) {
    sum += rp;
    while (sum > n) {
      sum -= lp;
      lp++;
    }
    if (sum === n) answer++;
  }
  return answer;
}

// * 1차 풀이
function solution(n) {
  let answer = 0;

  for (let start = 1; start <= n; start++) {
    let sum = 0;
    let next = start;
    while (sum < n) {
      sum += next;
      if (sum === n) {
        answer++;
        break;
      }
      next++;
    }
  }

  return answer;
}
