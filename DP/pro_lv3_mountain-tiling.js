// 나의 풀이
function solution(n, tops) {
  var answer = 0;
  let m = [];
  for (let i = 0; i <= n; i++) {
    if (i === n) {
      m.push([0]);
    } else {
      if (tops[i] === 0) m.push([0, 0]);
      else m.push([0, 0, 0]);
    }
  }
  // console.info('m', m);
  let ch = Array.from({ length: n + 1 }, () => null);

  function DFS(isPrevEmpty, level) {
    ch[level];
    if (level === n + 1) {
      answer++;
      answer %= 10007;
      return;
    }
    const slots = m[level].length;

    if (slots === 3) {
      // console.warn(3);
      DFS(true, level + 1);
      DFS(false, level + 1);
      DFS(false, level + 1);
      if (isPrevEmpty) {
        DFS(true, level + 1);
        DFS(false, level + 1);
      }
    } else if (slots === 2) {
      // console.warn(2);

      DFS(true, level + 1);
      DFS(false, level + 1);
      if (isPrevEmpty) {
        DFS(true, level + 1);
      }
    } else {
      // console.warn(1);
      DFS(false, level + 1);
      if (isPrevEmpty) {
        DFS(false, level + 1);
      }
    }
  }

  DFS(false, 0);

  // console.table(m);
  return answer;
}

// console.info(solution(1, [0])); // 3
// console.info(solution(1, [1])); // 4

// console.info(solution(2, [0, 0])); // 8
// console.info(solution(2, [1, 0])); // 11
// console.info(solution(2, [0, 1])); // 11
// console.info(solution(2, [1, 1])); // 15

console.info(solution(3, [0, 0, 0])); // 21
console.info(solution(3, [1, 0, 0])); // 29
console.info(solution(3, [0, 1, 0])); // 30
console.info(solution(3, [0, 0, 1])); // 29
console.info(solution(3, [1, 1, 0])); // 41
console.info(solution(3, [1, 0, 1])); // 40
console.info(solution(3, [0, 1, 1])); // 41
console.info(solution(3, [1, 1, 1])); // 56
// console.info(solution(4, [1, 1, 0, 1])); // 149
// console.info(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // 7704
