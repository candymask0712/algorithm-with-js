// ! gcd 공식 안보고 풀이!

function solution(arr) {
  return arr.reduce((acc, cur) => {
    return (acc * cur) / gcd(acc, cur);
  }, 1);
}

function gcd(m, n) {
  if (m % n === 0) return n;
  return gcd(n, m % n);
}
