// 첫번째 풀이 - 일부 효율성 실패

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let num = i;
    let sum = num;
    while (sum <= n) {
      if (sum === n) {
        answer++;
        break;
      } else {
        sum += ++num;
      }
    }
  }

  return answer;
}

// 두번째로 재풀이
function solution(n) {
  let answer = 0;

  let lp = 1;
  let rp = 1;

  let sum = 1;
  while (rp <= n) {
    if (sum >= n) {
      if (sum === n) answer++;
      sum -= lp;
      lp++;
    } else {
      rp++;
      sum += rp;
    }
  }

  return answer;
}
function solution(n) {
  let answer = 0;

  let lp = 1;
  let rp = 1;

  let sum = 1;
  while (rp <= n) {
    if (sum >= n) {
      if (sum === n) answer++;
      sum -= lp;
      lp++;
    } else {
      rp++;
      sum += rp;
    }
  }

  return answer;
}
