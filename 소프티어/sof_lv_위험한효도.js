// * 첫번째 풀이
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim();

const [a, b, d] = input.split(' ').map(Number);

function solution(a, b, d) {
  let answer = 0;
  let remain = d;
  while (remain > 0) {
    const step = Math.min(remain, a);
    answer += step;
    remain -= step;
    if (remain > 0) answer += b;
  }
  remain = d;
  while (remain > 0) {
    const step = Math.min(remain, b);
    answer += step;
    remain -= step;
    if (remain > 0) answer += a;
  }
  return answer;
}

console.log(solution(a, b, d));

// * 두번째 풀이
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim();

const [a, b, d] = input.split(' ').map(Number);

function calculateTime(cycleA, cycleB, distance) {
  let time = 0;
  let remain = distance;

  while (remain > 0) {
    const step = Math.min(remain, cycleA);
    time += step;
    remain -= step;
    if (remain > 0) time += cycleB;
  }

  return time;
}

function solution(a, b, d) {
  // 다가갈 때와 돌아올 때가 인자만 바뀌고 로직이 같다는 점에서 함수화 가능!
  const forwardTime = calculateTime(a, b, d);
  const backwardTime = calculateTime(b, a, d);

  return forwardTime + backwardTime;
}

console.log(solution(a, b, d));
