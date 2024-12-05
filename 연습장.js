function solution(x, y, n) {
  var answer = 0;

  function BFS() {
    let queue = [];
    queue.push([x, 0]);
    while (queue.length) {
      const current = queue.shift();
      let [num, count] = current;
      if (num === y) return count;
      for (const next of [
        ['+', n],
        ['*', 2],
        ['*', 3],
      ]) {
        const [operator, anotherNum] = next;
        if (operator === '+') {
          num += anotherNum;
        } else {
          num *= anotherNum;
        }

        if (num <= 1000000) {
          queue.push([num, count + 1]);
        }
      }
    }
  }
  BFS();

  return answer;
}
