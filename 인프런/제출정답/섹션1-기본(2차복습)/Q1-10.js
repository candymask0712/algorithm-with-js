// 모범 답안(심화)
function solution(s, t) {
  let answer = s.split(t).length;
  // ! 분할 메서드 이용 간단한 풀이
  // R을 기준으로 문자열을 나눠 배열에 넣음
  // 그러면 배열의 개수는 R보다 1개 크게 됨
  // 설령 R이 문자열의 맨 뒤라도 빈 문자열이 하나 생겨도 ok
  return answer - 1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));

// 4차 풀이 - 정답
function solution(str, target) {
  return str.split(target).length - 1;
}

// 3차 풀이 - 정답
function solution(str, target) {
  let answer = 0;
  for (let x of str) {
    if (x.toUpperCase() === target) answer++;
  }
  return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R')); // 3

//2차 풀이 - 1차 풀이 없음 (기본 정답과 동일)
let findLetter = function (str, letter) {
  let answer = 0;
  for (x of str) {
    if (x === letter) answer++;
  }
  return answer;
};
ex = 'COMPUTERPROGRAMMING';
console.log(findLetter(ex, 'R'));
