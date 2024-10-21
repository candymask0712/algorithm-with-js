function solution(N) {
  const memo = new Map();

  function BFS() {
    let queue = [[N, 0]];
    memo.set(N, 0);

    while (queue.length) {
      const [num, trial] = queue.shift();

      if (num === 1) {
        return trial;
      }

      const nextTrials = [
        [num - 1, trial + 1],
        [num % 2 === 0 ? num / 2 : null, trial + 1],
        [num % 3 === 0 ? num / 3 : null, trial + 1]
      ];

      for (const [nextNum, nextTrial] of nextTrials) {
        if (nextNum !== null && nextNum >= 1) {
          if (!memo.has(nextNum) || memo.get(nextNum) > nextTrial) {
            memo.set(nextNum, nextTrial);
            queue.push([nextNum, nextTrial]);
          }
        }
      }
    }

    return -1; // 1에 도달할 수 없는 경우
  }

  return BFS();
}

console.info(solution(2)); // 1
console.info(solution(10)); // 3
