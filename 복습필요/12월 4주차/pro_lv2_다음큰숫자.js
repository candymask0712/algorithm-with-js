function solution(n) {
  let answer = n + 1;
  while (true) {
    const num1 = n.toString(2);
    const num2 = answer.toString(2);
    if (isNumberOfOneEqual(num1, num2)) {
      return answer;
    }
    // ! 증가하는 로직없어 약간 딜레이
    // ! 필수 로직은 더 미리 작성
    answer++;
  }
}

function isNumberOfOneEqual(s1, s2) {
  let count = 0;
  for (const str of s1) {
    if (str === '1') count++;
  }
  for (const str of s2) {
    if (str === '1') count--;
  }
  return count === 0 ? true : false;
}
