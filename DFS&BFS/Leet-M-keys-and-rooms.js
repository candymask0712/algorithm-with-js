// * 문제
// *

//
//

// * 모범 답안
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
