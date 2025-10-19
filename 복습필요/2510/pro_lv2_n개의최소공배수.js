// * 문제

// * 모범 답안
function solution(arr) {
  return arr.reduce((acc, cur) => {
    return (acc * cur) / gcd(acc, cur);
  }, 1);
}

function gcd(m, n) {
  if (m % n === 0) return n;
  return gcd(n, m % n);
}
// * 3차 풀이

// * 2차 풀이 - (25.10.18) - 답보고 성공
// •	n = 배열 길이 (최대 15)
// •	M = 배열 원소의 최댓값 (최대 100)

// ? 시간복잡도: O(n × log M)
// 각 숫자마다 GCD 계산
// ? 공간복잡도: O(log M)
// 재귀 호출 스택 깊이

function solution(arr) {
  return arr.reduce((acc, cur) => lcm(acc, cur), 1);
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
// * 1차 풀이
// ! gcd 공식 안보고 풀이!

function solution(arr) {
  let answer = 1;
  let list = new Map();
  for (let x of arr) {
    let h = getEl(x);
    // console.log(h);
    for (let x of h.keys()) {
      // console.log('x', x);
      if (list.has(x)) list.set(x, Math.max(list.get(x), h.get(x)));
      else list.set(x, h.get(x));
    }
  }
  console.log('list', list);
  for (let el of list.keys()) {
    // console.log(el);
    answer *= el ** list.get(el);
  }
  return answer;
}
function getEl(n) {
  let hs = new Map();
  let cnt = 0;
  while (n > 1 && cnt < 100) {
    cnt++;
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        if (hs.has(i)) hs.set(i, hs.get(i) + 1);
        else hs.set(i, 1);
        n = n / i;
        break;
      }
      // console.log(n, i, hs);
    }
  }
  return hs;
}
