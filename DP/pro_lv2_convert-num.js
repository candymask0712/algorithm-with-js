// 나의 풀이
function solution(x, y, n) {
  let answer = -1;

  // BFS 함수 정의
  function BFS() {
    let queue = [];
    let visited = new Set(); // 방문한 숫자를 기록
    queue.push([x, 0]); // 초기값: [현재 숫자, 연산 횟수]
    visited.add(x);

    while (queue.length) {
      const [num, count] = queue.shift();

      // 목표 숫자에 도달하면 답 갱신
      if (num === y) {
        answer = count;
        return;
      }

      // 가능한 다음 숫자 계산
      for (const next of [
        num + n, // n을 더함
        num * 2, // 2를 곱함
        num * 3, // 3을 곱함
      ]) {
        // 조건: 다음 숫자가 y 이하이고, 방문하지 않은 숫자만 처리
        if (next <= y && !visited.has(next)) {
          visited.add(next); // 방문 표시
          queue.push([next, count + 1]); // 큐에 추가
        }
      }
    }
  }

  BFS(); // BFS 실행

  return answer;
}

// 모범 풀이
function solution(x, y, n) {
  const dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] !== Infinity ? dp[y] : -1;
}
