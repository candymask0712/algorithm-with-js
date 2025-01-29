// * 1번째 풀이

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const powers = input.split(' ').map(Number);

function solution(powers) {
  let answer = 0;
  const tournament = [];

  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      if (i === j) continue;
      tournament.push([i, j]);
    }
  }

  const combinations = [];

  function DFS(total) {
    if (total.length === tournament.length) {
      combinations.push(total);
      return;
    }

    for (let result of ['W', 'D', 'L']) {
      DFS(total + result);
    }
  }

  DFS('');

  combinations.forEach((combination, i) => {
    const scores = Array.from({ length: 4 }, (_, i) => [i, 0]);

    for (let i = 0; i < combination.length; i++) {
      const result = combination[i];
      const [A, B] = tournament[i];
      if (result === 'W') {
        scores[A][1] += 3;
      } else if (result === 'L') {
        scores[B][1] += 3;
      } else {
        // ! 이 부분에서 복붙을 하다가 scores[A][1] += 1 을 두 번 반복함
        scores[A][1] += 1;
        scores[B][1] += 1;
      }
    }

    scores.sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return b[1] - a[1];
    });

    // ! 여기에서 조건을 잘못 설정
    // ! if(scores[0][0] === 1 || scores[0][1] === 1) {
    // ! 무의식적으로 0번째 인덱스가 아닌 1번째 인덱스라고 생각함 (1번째 루돌프이므로)
    if (scores[0][0] === 0 || scores[1][0] === 0) {
      let chance = 1;
      for (let i = 0; i < combination.length; i++) {
        const result = combination[i];
        const [A, B] = tournament[i];
        const FA = powers[A];
        const FB = powers[B];

        if (result === 'W') {
          chance *= (4 * FA) / (5 * (FA + FB));
        } else if (result === 'L') {
          chance *= (4 * FB) / (5 * (FA + FB));
        } else {
          chance *= (FA + FB) / (5 * (FA + FB));
        }
      }

      answer += chance * 100;
    }
  });
  return answer.toFixed(3);
}

console.log(solution(powers));
