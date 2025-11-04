// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
O(n);
O(n);
var cloneGraph = function (node) {
  if (node === null) return null;
  const visited = new Map();

  function dfs(cur) {
    if (visited.has(cur)) return visited.get(cur);
    const copy = new Node(cur.val, []);
    visited.set(cur, copy);

    for (const nei of cur.neighbors) {
      copy.neighbors.push(dfs(nei));
    }
    return copy;
  }

  return dfs(node);
};
