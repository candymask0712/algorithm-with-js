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
