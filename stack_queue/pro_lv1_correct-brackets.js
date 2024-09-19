// * 접근 방법
// 문자열 s의 길이 : 100,000 이하의 자연수 => 10초 기준 O(n^2)까지 사용가능

// * 최근 나의 풀이 (24.09.18)
function solution(s) {
  let count = 0;
  const stack = s.split('');

  for (const bracket of stack) {
    bracket === '(' ? count++ : count--;
    if (count < 0) return false;
  }

  return count === 0 ? true : false;
}
