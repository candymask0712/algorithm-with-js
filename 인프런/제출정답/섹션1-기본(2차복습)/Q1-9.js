// 모범 답안
function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x == 'A') answer += '#';
    else answer += x;
  }
  return answer;
}

let str = 'BANANA';

// 4차 - 정답
function solution(str) {
  return str.replace(/A/g, '#');
}

// 3차 답안 - 정답
function solution(str) {
  return str.replace(/A/g, '#');
}

console.log(solution('BANANA')); // B#N#N#

// 2차 답안 - 예시 답안과 차이 없음
let aConverter = function (word) {
  let answer = '';
  for (let x of word) {
    if (x === 'A') answer += '#';
    else answer += x;
  }
  return answer;
};
let arr = 'BANANA';
console.log(aConverter(arr));

// 1차 답안
var solution = function (a, b) {
  let answer = 0;
  for (let x of a) {
    if (x === b) answer++;
  }
  return answer;
};
let exStr = 'asdfqddwer';
console.log(solution(exStr, 'd'));
