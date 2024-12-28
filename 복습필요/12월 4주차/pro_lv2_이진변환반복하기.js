function solution(s) {
  var answer = [0, 0];

  while (s !== '1') {
    const [len, countZero] = countOne(s);
    s = Number(len).toString(2);
    answer[0]++;
    answer[1] += countZero;
  }

  return answer;
}

function countOne(s) {
  let answer = 0;
  const n = s.length;
  for (const str of s) {
    if (str === '1') answer++;
  }
  return [answer, n - answer];
}
