const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const line = input[1].split('');

function solution(line, N, K) {
  let answer = 0;
  for (let i = 0; i < N; i++) {
    if (line[i] === 'P') {
      const start = Math.max(0, i - K);
      // ! end는 미만이기 때문에 1을 더해줘야하는데 빼먹어서 지연 됨
      const end = Math.min(N, i + K + 1);
      for (let j = start; j < end; j++) {
        if (line[j] === 'H') {
          line[j] = 'X';
          answer++;
          break;
        }
      }
    }
  }
  return answer;
}
// ! N, K를 원래는 인자에 넣어주지 않다가 함수 시그니처에만 작성 후
// ! 실행 시 인자에만 넣어주어서 잘못된 답이 나옴
console.log(solution(line, N, K));
