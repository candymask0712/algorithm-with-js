// 모범 답안
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  //if(s.length%2===1) answer=s.substr(mid, 1);
  //else answer=s.substr(mid-1, 2);
  return answer;
}

// 5차 - 정답
function solution(str) {
  let answer;
  const n = str.length;
  if (n % 2 === 1) answer = str[Math.floor(n / 2)];
  else answer = str.slice(n / 2 - 1, n / 2 + 1);
  return answer;
}

// 4차 답안 - 삼항연산자 & substr & === 생략 => 수식 단축
function solution(str) {
  return str.length % 2 ? str[Math.round(n / 2) - 1] : str.substr(n / 2 - 1, 2);
}

// 3차 답안 - 정답
// Math.round(반올림) .ceil(올림) .floor(내림) 약간 헷갈림 => 숙지 필요
// 문자열 자르기(substring(시작, 끝), substr(시작, 개수)) 기억안나 []사용
function solution(str) {
  let answer;
  let n = str.length;
  if (n % 2 === 1) answer = str[Math.round(n / 2) - 1];
  else answer = str[n / 2 - 1] + str[n / 2];
  return answer;
}

// 2차 답안
let printCenterLetter = function (word) {
  // 반복되는 Math.floor(word.length/2 를 변수로 선언 시 좀 더 효율적인 코드 작성 가능
  if (word.length % 2 === 1) return word[Math.floor(word.length / 2)];
  else return word.substr(word.length / 2 - 1, 2);
};
let exStr1 = 'abcdef';
let exStr2 = 'abcde';
console.log(printCenterLetter(exStr1));
console.log(printCenterLetter(exStr2));

// 1차 답안
var solution = function (s) {
  let answer = '';
  if (s.length % 2 === 1) answer = s.substr(s.length / 2, 1);
  else answer = s.substr(s.length / 2 - 1, 2);
  return answer;
};
let exStr = 'abcdef';
console.log(solution(exStr));
