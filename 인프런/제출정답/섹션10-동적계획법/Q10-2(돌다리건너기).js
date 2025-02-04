// * 모범답안

// * 4차 풀이

// * 3차 풀이

// * 2차 풀이
function solution(n) {
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  return dy[n + 1];
}
console.info(solution(7)); // 34

// * 1차 풀이
const solution = (n) => {
  let ch = Array.from({ length: n + 1 }, () => 0);
  ch[1] = 1;
  ch[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    // ! 이전 문제와 달리 돌이 n개여서 도착지는 n+1
    ch[i] = ch[i - 2] + ch[i - 1];
  }
  return ch[n + 1];
};

console.log(solution(7));
