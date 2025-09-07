// * 문제
// *

//
//

// * 모범 답안
// ? 시간복잡도: O(n + m)
// ? 공간복잡도: O(1)
var countNegatives = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  let row = 0; // 행: 위에서 시작
  let col = m - 1; // 열: 오른쪽 끝에서 시작
  let count = 0;

  while (row < n && col >= 0) {
    if (grid[row][col] < 0) {
      // 이 열에서 row 아래는 전부 음수
      count += n - row;
      col--; // 왼쪽으로 이동해 다음 열 검사
    } else {
      // 음수가 아니면 더 아래 행에서 음수가 시작될 수 있음
      row++; // 아래로 이동
    }
  }

  return count;
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.09.07) - 틀림
// ? 시간복잡도: O(nlogm)
// ? 공간복잡도: O(1)

var countNegatives = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const nums = grid[i];
    let lp = 0;
    let rp = m - 1;
    while (lp <= rp) {
      const mid = Math.floor((rp + lp) / 2);
      // ! lp, rp 방향설정의 문제
      if (nums[mid] <= -1) {
        rp = mid - 1;
      } else {
        lp = mid + 1;
      }
    }
    answer += m - lp;
  }
  return answer;
};
