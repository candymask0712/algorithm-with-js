// 예시 답안
function solution(s) {
  let answer = '',
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];

// 4차 -정답
function solution(arr) {
  // ! 시간복잡도 상 루프가 한 번 도는 모범답안 또는 sort를 통한 풀이가 필요
  const wordLength = arr.map((el) => el.length);
  return arr[wordLength.indexOf(Math.max(...wordLength))];
}

// 3차 풀이 - 정답
function solution(arr) {
  return arr.sort((a, b) => b.length - a.length)[0];
}

let arr = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(arr));

// 2차 풀이
const exam2 = ['teacher', 'time', 'student', 'beautiful', 'good'];
let longestStr = function (arr) {
  let answer = '';
  // answer을 숫자로 설정했다면 굳이 answer.length를 쓸필요 x
  for (let i = 0; i < arr.length; i++) {
    // 단순 문자열 외에도 배열의 경우도 for of 사용 가능
    if (arr[i].length > answer.length) answer = arr[i];
  }
  return answer;
};
console.log(longestStr(exam2));

// 1차 풀이
const a = '5';
const exam = ['teacher', 'time', 'student', 'beautiful', 'good'];
let solution = function (s) {
  let answer = '';
  for (let i = 0; i < a; i++) {
    if (s[i].length > answer.length) answer = s[i];
  }
  return answer;
};
console.log(solution(exam));
