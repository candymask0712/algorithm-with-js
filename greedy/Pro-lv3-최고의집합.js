// * 문제..
// *

//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 (25.08.18) - 성공

function solution(n, s) {
  if (Math.floor(s / n) === 0) return [-1];
  let answer = [];

  while (s > 0) {
    const num = Math.floor(s / n);
    s -= num;
    n--;
    answer.push(num);
  }

  return answer;
}
