// https://school.programmers.co.kr/learn/courses/30/lessons/62048
// 풀이 - 답안 참고
function solution(w, h) {
  const total = w * h;
  const gcd = getGcd(w, h);
  const waste = w + h - gcd;
  return total - waste;
}

function getGcd(m, n) {
  if (m % n === 0) return n;
  return getGcd(n, m % n);
}
