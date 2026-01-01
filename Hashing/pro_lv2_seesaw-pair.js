// 나의 풀이 - 1
// ! 4중 루프를 이용해 비교하는 형태라 시간복잡도 높음

function solution(weights) {
  var answer = 0;
  const n = weights.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const weight1 = weights[i];
      const weight2 = weights[j];
      if (isBalanced(weight1, weight2)) {
        answer++;
      }
    }
  }
  return answer;
}

function isBalanced(a, b) {
  if (a === b) return true;
  const positionList = [2, 3, 4];
  const n = positionList.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const weight1 = a * positionList[i];
      const weight2 = b * positionList[j];
      if (weight1 === weight2) return true;
    }
  }
  return false;
}
