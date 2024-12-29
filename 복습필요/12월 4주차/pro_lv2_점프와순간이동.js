// * 첫번째 풀이
// 앞에서부터 풀기위해 고생
function solution(n) {
  let answer = Infinity;

  for (let i = 1; i < n; i++) {
    let bolt = i;
    let cur = i;
    while (cur <= n) {
      if (cur === n) {
        console.log(cur, bolt, answer);
        answer = Math.min(answer, bolt);
        break;
      }

      const next = cur * 2;

      if (next > n) {
        bolt += n - cur;
        console.log(i, cur, bolt);
        answer = Math.min(answer, bolt);
        break;
      } else {
        cur = next;
      }
    }
  }

  return answer;
}

// 두 번째 풀이
function solution() {
  return n.toString(2).split('1').length - 1;
}
