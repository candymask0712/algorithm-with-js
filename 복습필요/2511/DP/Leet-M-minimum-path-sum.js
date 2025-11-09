// * 문제
// *

//
//

// * 모범 답안
var minPathSum = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 첫 번째 칸은 그대로 둠
      if (i === 0 && j === 0) continue;

      const fromTop = i > 0 ? grid[i - 1][j] : Infinity;
      const fromLeft = j > 0 ? grid[i][j - 1] : Infinity;

      grid[i][j] += Math.min(fromTop, fromLeft);
    }
  }

  return grid[n - 1][m - 1];
};

// * 3차 풀이

// * 2차 풀이 - (25.11.08) - 실패
// ? 시간복잡도: O(n*m)
// ? 공간복잡도: O(1)
var minPathSum = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // ! 첫 번째 칸은 그대로 두는 것이 핵심
      if (i === 0 && j === 0) continue;

      const fromTop = i > 0 ? grid[i - 1][j] : Infinity;
      const fromLeft = j > 0 ? grid[i][j - 1] : Infinity;

      grid[i][j] += Math.min(fromTop, fromLeft);
    }
  }

  return grid[n - 1][m - 1];
};

// * 1차 풀이 - (25.11.08) - 실패
// ? 시간복잡도: O(n*m)
// ? 공간복잡도: O(1)
var minPathSum = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const prevTop = grid?.[i - 1]?.[j] || Infinity;
      const prevLeft = grid?.[i]?.[j - 1] || Infinity;
      grid[i][j] += Math.min(prevLeft, prevTop);
      console.log(Math.min(prevLeft, prevTop));
      console.table(grid);
    }
  }

  return grid[n - 1][m - 1];
};
