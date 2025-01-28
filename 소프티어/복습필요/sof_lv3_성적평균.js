const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const scores = input[1].split(' ').map(Number);
const intervals = input
  .slice(2)
  .map((interval) => interval.split(' ').map(Number));

function solution(scores, intervals) {
  intervals.forEach((interval) => {
    const [start, end] = interval;
    const average =
      scores.slice(start - 1, end).reduce((acc, cur) => acc + cur, 0) /
      (end - start + 1);
    console.log(average.toFixed(2));
  });
}

solution(scores, intervals);
