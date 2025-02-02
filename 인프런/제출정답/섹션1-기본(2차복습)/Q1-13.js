// 3차 풀이 - 정답
function solution(str) {
  let answer = '';
  for (const el of str) {
    answer += el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
  }
  return answer;
}

// 2차 풀이 - 정답
function solution(str) {
  let answer = '';
  for (let x of str) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

//1차 풀이 - 모범 답안과 동일
let solution = function (s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
};
