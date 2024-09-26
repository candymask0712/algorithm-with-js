function solution(k) {
  function BFS(n) {
    let queue = [];
    queue.push(n);
    while (queue.length) {
      const current = queue.shift();
      console.info(current);
      for (const next of [2 * current, 2 * current + 1]) {
        if (next < k) {
          queue.push(next);
        }
      }
    }
  }
  BFS(1);
}

console.info(solution(8));
