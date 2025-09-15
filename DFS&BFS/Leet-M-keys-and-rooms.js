// * 문제
// *

//
//

// * 모범 답안
// ? 시간복잡도: O(n + e)
// (n = 방 수, e = 키의 총 개수)
// ? 공간복잡도: O(n)

// ! rooms = 그래프의 인접 리스트 (adjacency list)
var canVisitAllRooms = function (rooms) {
  const n = rooms.length;
  const visited = Array(n).fill(false);
  const stack = [0];
  visited[0] = true;
  let visitedCount = 1;
  // ! '모든' 방 탐색 DFS로 충분
  while (stack.length) {
    const room = stack.pop(); // ! pop 사용시 LIFO -> DFS, shift 사용시 FIFO -> BFS
    for (const key of rooms[room]) {
      if (!visited[key]) {
        visited[key] = true;
        visitedCount += 1;
        if (visitedCount === n) return true; // ✅ 조기 종료
        stack.push(key);
      }
    }
  }
  return visitedCount === n;
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.09.15) - 정답
// 	dfs는 모든 방과 키(간선)를 순회 → 기본적으로 O(n + e)
// (n = 방 수, e = 키의 총 개수)
// 	하지만 매번 ch.every(...)가 O(n) 이라서, 최악의 경우 O(n) * O(n+e) = O(n² + n·e)
// •	정점 처리 비용: 방은 총 n개, 각 방은 DFS에서 최대 한 번 방문 → O(n)
// •	간선 처리 비용: 각 키(간선)는 한 번씩만 확인 → O(e)
// •	따라서 총 비용 = O(n + e)

// 	즉, 최악에는 O(n²) 로 느려질 수 있음.
// ? 시간복잡도: O(n²)
// ? 공간복잡도: O(n)

var canVisitAllRooms = function (rooms) {
  let answer = false;
  let ch = Array(rooms.length).fill(0);
  function dfs(next) {
    if (ch.every((num) => num === 1)) {
      answer = true;
      return;
    }

    rooms[next].forEach((key) => {
      if (ch[key] === 0) {
        ch[key] = 1;
        dfs(key);
      }
    });
  }
  // ! 첫 방을 방문했다고 체크하지 않아 해맴
  ch[0] = 1;
  dfs(0);

  return answer;
};
