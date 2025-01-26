// * 1차 풀이
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const land = input.map((line) => line.split(' ').map(Number));
const costs = [];

for (let i = 0; i < 3; i++) {
  let cost = 0;
  const unique = new Set();
  for (let j = 0; j < 3; j++) {
    unique.add(land[i][j]);
  }
  if (unique.size === 1) cost = 0;
  else if (unique.size === 3) cost = 2;
  else {
    const setArr = Array.from(unique);
    cost = Math.abs(setArr[0] - setArr[1]);
  }
  costs.push(cost);
}

// ! 행렬의 열방향 순회에 대해서도 복습하기
for (let i = 0; i < 3; i++) {
  let cost = 0;
  const unique = new Set();
  for (let j = 0; j < 3; j++) {
    unique.add(land[j][i]);
  }
  if (unique.size === 1) cost = 0;
  else if (unique.size === 3) cost = 2;
  else {
    const setArr = Array.from(unique);
    cost = Math.abs(setArr[0] - setArr[1]);
  }
  costs.push(cost);
}

costs.sort();
console.log(costs[0]);

// * gpt가 리팩토링한 코드
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const land = input.map((line) => line.split(' ').map(Number));

// 1x3 영역의 최소 비용 계산 함수
function calculateCost(line) {
  const unique = new Set(line); // 중복 제거된 높이 값
  if (unique.size === 1) return 0; // 모든 높이가 같음
  if (unique.size === 3) return 2; // 세 가지 높이가 모두 다름
  const heights = Array.from(unique);
  return Math.abs(heights[0] - heights[1]); // 두 개의 높이 차이
}

const costs = [];

// 가로 방향 비용 계산
for (let i = 0; i < 3; i++) {
  costs.push(calculateCost(land[i]));
}

// 세로 방향 비용 계산
for (let i = 0; i < 3; i++) {
  const column = [land[0][i], land[1][i], land[2][i]];
  costs.push(calculateCost(column));
}

// 최소 비용 출력
console.log(Math.min(...costs));
