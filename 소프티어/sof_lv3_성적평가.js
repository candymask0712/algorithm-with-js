const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
// ! 이부분에서 total score 처리해주면 좋을 듯
const challenges = input
  .slice(1)
  .map((challenge) => challenge.split(' ').map(Number));

function solution(N, challenges) {
  const totalScores = Array(N).fill(0);
  challenges.forEach((challenge) => {
    let answer = '';
    const sortedChallenge = challenge.slice().sort((a, b) => b - a);
    // ! 반복되는 해시 기반의 등수 계산 로직 공통화 하면 좋음
    const h = new Map();

    sortedChallenge.forEach((score, index) => {
      if (!h.get(score)) h.set(score, index + 1);
    });

    challenge.forEach((score, index) => {
      totalScores[index] += score;
      answer += h.get(score) + ' ';
    });

    console.log(answer.trim());
  });

  let answer = '';

  const h2 = new Map();
  const sortedTotalScores = totalScores.slice().sort((a, b) => b - a);
  sortedTotalScores.forEach((score, index) => {
    if (!h2.get(score)) h2.set(score, index + 1);
  });

  totalScores.forEach((score) => {
    answer += h2.get(score) + ' ';
  });
  console.log(answer.trim());
}

solution(N, challenges);
