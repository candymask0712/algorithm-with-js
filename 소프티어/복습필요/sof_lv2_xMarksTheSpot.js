const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const strPairs = input.slice(1).map((pair) => pair.split(' '));

function solution(strPairs) {
  let answer = '';
  strPairs.forEach((strPair) => {
    const [S, T] = strPair;
    for (let i = 0; i < S.length; i++) {
      if (S[i] === 'x' || S[i] === 'X') {
        answer += T[i].toUpperCase();
        break;
      }
    }
  });
  return answer;
}

console.log(solution(strPairs));
