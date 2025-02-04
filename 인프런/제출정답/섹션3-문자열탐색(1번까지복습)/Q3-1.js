//모범답안 (기본)
function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return 'NO';
  }
  return answer;
}

let str = 'goooG';
console.log(solution(str));

//모범답안 (심화)
function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  if (s.split('').reverse().join('') != s) return 'NO';
  return answer;
}

let str = 'gooG';
console.log(solution(str));

// 4차 - 정답
// ! 모범답안이 조금 더 우수
function solution(str) {
  const n = str.length;
  const m = Math.floor(str.length / 2);
  for (let i = 0; i < n; i++) {
    if (str[i].toLowerCase() !== str[n - i - 1].toLowerCase()) return 'NO';
  }
  return 'YES';
}

// 3차 답안 - 정답
// ! 배열로 전환 시 reverse를 쓸 수 있어 더 간단히 풀이 가능
// ! if (s.split('').reverse().join('') != s) return 'NO';
function solution(str) {
  str = str.toLowerCase();
  let n = Math.floor(str.length / 2);
  for (let i = 0; i <= n; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

//2차 정답(정석) - 해설 보지 않고 풀이 하지만 한계 존재
let findRoundRobin = function (ex) {
  let answer = 'YES';
  let word = ex.toUpperCase();
  if (word.length % 2 === 0) {
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) return 'NO';
    }
  } else {
    for (let i = 0; i < (word.length - 1) / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) return 'NO';
    }
  }
  // 풀이에서는 글자 개수가 홀수/짝수개 일 때를 나누지 않고 한번에 처리
  return answer;
};

//2차 정답(심화) - 해설 보고 풀이
let findRoundRobin = function (ex) {
  let word = ex.toUpperCase();
  if (word.split('').reverse().join('') === word) return 'YES';
  // 중간에 join() ''를 안 넣어줘서 실패
  else return 'NO';
};
let ex = 'aaas';
console.log(findRoundRobin(ex));

let ex = 'ttdsrdtt';
console.log(findRoundRobin(ex));
