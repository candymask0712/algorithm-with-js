// 모범답안 (심화) - indexOf로 특정문자열의 중복 횟수 카운팅
function solution(s, k) {
  let answer = 0;
  let pos = s.indexOf('k');
  while (pos !== -1) {
    answer++;
    pos = s.indexOf('k', pos + 1);
  }
  return answer;
}
str = 'ksdfaksdkkkk';
console.log(solution(str, 'k'));

// 모범답안
function solution(s) {
  let answer = '';
  // s.indexOf('k') : k의 위치 인덱스 값을 찾아 반환
  // s.indexOf('k',n) : 인자로 숫자 n 을 추가하면 n번째 인덱스부터 검색
  // 중복되는 문자는 자신의 인덱스와 indexOf로 리턴되는 값이 다른 원리를 이용
  // (중복되는 문자라면 앞에서 먼저 발견된 문자의 인덱스 번호를 반환)
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution('ksekkset'));

// 5차 - 정답
let solution = (str) => {
  // ! 복잡도 때문에 모범 답안이 더 효율적
  let answer = '';
  const list = [];
  const n = str.length;
  for (let i = 0; i < n; i++) {
    if (list.indexOf(str[i]) === -1) {
      list.push(str[i]);
      answer += str[i];
    }
  }
  return answer;
};

// * 4차 답안 (3차답안 리팩토링)
let solution = (str) => {
  return Array.from(new Set(str.split(''))).join('');
};
// * 3차 답안 - 성공 (효율성과 무관하게 짧은 코드 작성)
let solution = (str) => {
  let answer = '';
  let arr = str.split('');
  arr = Array.from(new Set(arr));
  answer = arr.join('');

  return answer;
};

// 2차 답안 - 문제를 잘 못 품(연속하는 중복문자 제거로 단순하게 이해)
// let deleteRepeatedLetter = function (s) {
//     let answer = "";
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== s[i-1]) answer += s[i];
//     }
//     return answer;
// }
// let ex = 'ksekkset';
// console.log(deleteRepeatedLetter(ex));
