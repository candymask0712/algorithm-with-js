// 수정 코드
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const limits = input
  .slice(1, N + 1)
  .map((limit) => limit.split(' ').map(Number));
const logs = input.slice(N + 1).map((limit) => limit.split(' ').map(Number));

function solution(limits, logs) {
  let answer = 0;

  // 제한 구간 채우기
  const limitSpeeds = Array(100).fill(0);
  let pos = 0;
  for (const [length, speed] of limits) {
    for (let i = 0; i < length; i++) {
      limitSpeeds[pos++] = speed;
    }
  }

  // 테스트 구간 채우기
  const testSpeeds = Array(100).fill(0);
  pos = 0;
  for (const [length, speed] of logs) {
    for (let i = 0; i < length; i++) {
      testSpeeds[pos++] = speed;
    }
  }

  // 속도 초과 계산
  for (let i = 0; i < 100; i++) {
    if (testSpeeds[i] > limitSpeeds[i]) {
      answer = Math.max(answer, testSpeeds[i] - limitSpeeds[i]);
    }
  }

  return answer;
}

console.log(solution(limits, logs));

// * 1차 풀이
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split('').map(Number);
const limits = input
  .slice(1, N + 1)
  .map((limit) => limit.split(' ').map(Number));
const logs = input.slice(N + 1).map((limit) => limit.split(' ').map(Number));

function solution(limits, logs) {
  let answer = 0;
  let sectionLimits = [[0, limits[0][1]]];
  let accLength = 0;

  for (let i = 1; i < limits.length; i++) {
    const [length, _] = limits[i - 1];
    const [$, speed] = limits[i];
    accLength += length;
    sectionLimits.push([accLength, speed]);
  }

  logs.forEach((log) => {
    const [length, speed] = log;

    for (let i = 0; i < sectionLimits.length; i++) {
      const sectionLimit = sectionLimits[i];
      const [sectionLength, sectionSpeed] = sectionLimit;

      if (length <= sectionLength) break;

      if (speed > sectionSpeed) answer = Math.max(answer, speed - sectionSpeed);
    }
  });
  return answer;
}

console.log(solution(limits, logs));
