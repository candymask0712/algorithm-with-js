const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const k = Number(input[1]);

function findKthNumber(N, k) {
  let left = 1,
    right = N * N,
    answer = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    // mid 이하의 숫자 개수 계산
    for (let i = 1; i <= N; i++) {
      count += Math.min(Math.floor(mid / i), N);
    }

    if (count >= k) {
      answer = mid;
      right = mid - 1; // 더 작은 값이 있을 수 있으므로 줄이기
    } else {
      left = mid + 1; // k번째를 찾으려면 범위를 늘려야 함
    }
  }

  return answer;
}

// 예제 테스트
console.log(findKthNumber(N, k)); // 6
