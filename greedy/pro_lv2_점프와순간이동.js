// * 모범 답안
// 	순간이동(/2)은 공짜
// 	홀수(=이진수에서 1 자리)는 점프를 의미

// 즉, 이진수 표현에서 1이 몇 개인지가 “얼마나 점프해야 했는가”와 동일
function solution(n) {
  return n.toString(2).split('1').length - 1;
}
// * 3차 풀이 - (25.10.25) - 성공
// ? 시간복잡도: O(logn)
// ? 공간복잡도: O(1)
function solution(n) {
  let answer = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (n - 1) / 2;
      answer++;
    }
  }
  return answer;
}

// * 2차 풀이 - (25.10.18) - 답보고 성공
// ? 시간복잡도: O(log n)
// ? 공간복잡도: O(1)
function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      answer++;
      n = (n - 1) / 2;
    }
  }
  return answer;
}

// * 1차 풀이
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
