// 나의 풀이
function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const bonusCount = parseInt(n / a);
    const bonusBottles = bonusCount * b;
    n = n % a;
    n += bonusBottles;
    answer += bonusBottles;
  }

  return answer;
}

// 개선 풀이
function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const bonus = Math.floor(n / a) * b;
    n = (n % a) + bonus;
    answer += bonus;
  }

  return answer;
}
