// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
// ? 시간복잡도: O(log(n*m))
// ? 공간복잡도: O(1)

var searchMatrix = function (matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;

  const t = n * m - 1;

  let lp = 0;
  let rp = t;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);
    const num = matrix[Math.floor(mid / m)][mid % m];

    if (num === target) return true;
    // ! else if, else 조건을 헷갈려서 시간 조금 지연
    else if (num > target) rp = mid - 1;
    else lp = mid + 1;
  }

  return false;
};
