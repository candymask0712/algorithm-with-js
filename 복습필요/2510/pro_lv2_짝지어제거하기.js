// * 문제

// * 모범 답안

// * 3차 풀이 - (25.10.18) - 실패
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(n)
function solution(s) {
  const stack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const cur = s[i];
    if (!stack.length || stack.at(-1) !== cur) {
      stack.push(cur);
    } else {
      stack.pop();
    }
  }
  return stack.length ? 0 : 1;
}
// * 2차 풀이

// 두번째 풀이
// ! 스택 구조를 이용해서 한번에 풀이
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.at(-1) === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length ? 0 : 1;
}

// * 1차 풀이

// 첫번째 풀이
// ! while문을 통해서 제거하려고해서 시간초과
function solution(s) {
  let count = 0;
  s = s.split('');

  do {
    if (s.length === 1) return 0;
    count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) {
        s.splice(i, 2);
        count++;
        i--;
        i--;
      } else {
        return 0;
      }
    }
  } while (count !== 0);
  return s.length ? 0 : 1;
}
