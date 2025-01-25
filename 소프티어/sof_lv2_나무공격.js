const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// ! 모든 숫자값은 그 즉시 숫자로 변환할 것
const [n, m] = input[0].split(' ').map(Number);
// ! slice 시 값이 문자로 계산되어 의도와는 달라지는 경우 발생
const forest = input.slice(1, n + 1).map((line) => line.split(' ').map(Number));
const firstShot = input[input.length - 2].split(' ').map(Number);
const secondShot = input[input.length - 1].split(' ').map(Number);

function solution(forest, firstShot, secondShot) {
  const attackers = forest.map((line) => {
    const total = line.reduce((acc, cur) => acc + cur, 0);
    return total;
  });

  const [firstStart, firstEnd] = firstShot;
  const firstResult = getResultAfterAttack(attackers, firstStart, firstEnd);

  const [secondStart, secondEnd] = secondShot;
  const secondResult = getResultAfterAttack(
    firstResult,
    secondStart,
    secondEnd
  );

  const totalRemained = secondResult.reduce((acc, cur) => acc + cur, 0);
  return totalRemained;
}

function getResultAfterAttack(list, start, end) {
  const copiedList = list.slice();
  // ! 예시에서는 1번째 행부터 시작하기에 개발언어에 맞게 보정해야함
  // ! 문제 읽을 시 정확하게 파악할 것
  for (let i = start - 1; i <= end - 1; i++) {
    if (copiedList[i] >= 1) copiedList[i]--;
  }
  return copiedList;
}

console.log(solution(forest, firstShot, secondShot));
