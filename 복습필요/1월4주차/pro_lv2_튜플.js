// * 1차 풀이
function solution(s) {
  var answer = [];

  s = s.replaceAll('}', ']');
  s = s.replaceAll('{', '[');

  const arr = JSON.parse(s);

  arr.sort((a, b) => a.length - b.length);

  for (const subArr of arr) {
    for (const num of subArr) {
      if (!answer.includes(num)) {
        answer.push(num);
        break;
      }
    }
  }

  return answer;
}
