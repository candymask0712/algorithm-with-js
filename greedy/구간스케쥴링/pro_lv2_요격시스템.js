// 나의 풀이
function solution(targets) {
  let answer = 1;
  targets.sort((a, b) => {
    return a[1] - b[1];
  });

  let currentX = targets[0][1];

  targets.forEach((target, index) => {
    if (index === 0) return;
    const [a, b] = target;
    if (a >= currentX) {
      answer++;
      currentX = b;
    }
  });

  return answer;
}
