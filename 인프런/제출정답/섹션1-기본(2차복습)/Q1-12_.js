// 모범답안(심화)
function solution(s) {
  let answer = '';
  for (let x of s) {
    let num = x.charCodeAt();
    // x.charCodeAt() : x의 아스키코드를 반환
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    // String.fromCharCode(index) : index에 해당하는 아스키코드를 가진 문자를 반환
    // 97~122 : 소문자의 아스키코드 (97이 a) // 65 ~ 90 : 대문자의 아스키코드
    // 소문자와 대문자의 아스키코드 차이는 32
    else answer += x;
  }
  return answer;
}

// 3차 - 정답
function solution(str) {
  return str.toUpperCase();
}

// 2차 풀이 - 정답
function solution(str) {
  return str.toUpperCase();
}

// 1차 풀이 - 이상없음
let str = 'ItisTimeToStudy';
console.log(solution(str));

let solution = function (s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toUpperCase()) {
      answer += x;
    } else {
      answer += x.toUpperCase();
    }
  }
  return answer;
};
const exam = 'ItisTimeToStudy';
console.log(solution(exam));
