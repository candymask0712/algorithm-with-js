// 모범 답안
function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s.split('').reverse().join('') !== s) return 'NO';
  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));

// 3차 - 성공
function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (Number(s[i] === NaN)) {
      if (s[i] != s[len - i - 1]) return 'NO';
    }
  }
  return answer;
}

// 2차 답안 - 성공

function solution(str) {
  str = str.toLowerCase();
  // ! 처음에 공백제거를 str.replace(/' '/g, '') 처럼 작성해서 풀이 지연
  str = str.replace(/ /g, '');

  let n = Math.floor(str.length / 2);
  for (let i = 0; i <= n; i++) {
    // ! 문제 내용에 맞게 알파벳만 비교하는 코드 작성
    if (
      str[i].charCodeAt >= 97 &&
      str[i].charCodeAt <= 122 &&
      str[i] !== str[str.length - 1 - i]
    )
      return 'NO';
    console.log(str[i]);
  }
  return 'YES';
}

// 1차 답안 - 실패
