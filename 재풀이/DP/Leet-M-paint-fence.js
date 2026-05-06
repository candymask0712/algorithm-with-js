// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
var numWays = function (n, k) {
  if (n === 1) return k;

  // i = 2 기준 초기값
  let same = k; // (1번 색 k가지) + (2번을 1번과 같게) => k
  let diff = k * (k - 1); // (1번 색 k가지) + (2번을 다르게 k-1가지) => k*(k-1)

  for (let i = 3; i <= n; i++) {
    const newSame = diff; // 이전이 diff일 때만 2연속 같은 색 가능
    const newDiff = (same + diff) * (k - 1); // 색을 바꾸면 (k-1)가지
    same = newSame;
    diff = newDiff;
  }

  return same + diff;
};
