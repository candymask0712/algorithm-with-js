// 모범 답안
// ! isNaN을 이용해 판별
function solution(str) {
  let answer = '';
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));

// 3차 - 정답
function solution(s) {
  return Number(s.toLowerCase().replace(/[^0-9]/g, ''));
}

console.log(solution('g0en2T0s8eSoft')); // 208

// 2차 풀이
// ! 단순 숫자 추출 시 '0208' 처럼 첫 자리가 0으로 시작할수도 있음 주의
function solution(str) {
  str = str.replace(/[^0-9]/g, '');
  return str[0] === 0 ? Number(str.slice(1)) : Number(str);
}

console.log(solution('g0en2T0s8eSoft'));

// 1차 풀이
let s = 'fa2132lk4jssdf2354d';
let onlyNum = function (t) {
  answer = t.replace(/[^0-9]/g, '');
  return answer;
};
console.log(onlyNum(s));
