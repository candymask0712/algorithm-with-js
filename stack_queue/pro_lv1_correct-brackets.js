// * 최근 나의 풀이 (24.09.18)
function solution(s) {
  var answer = true;
  let count = 0;
  const stack = s.split('');
  for (const bracket of stack) {
    if (bracket === '(') count++;
    else count--;
    if (count < 0) return false;
  }

  return count === 0 ? true : false;
}
