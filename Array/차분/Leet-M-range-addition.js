// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.10.10) - 성공(차분 이용)
// ? 업데이트 개수를 U, 배열 길이를 N이라고 할 때
// ? 시간복잡도: O(U + N)
// ? 공간복잡도: O(N)
var getModifiedArray = function (length, updates) {
  const diff = Array(length + 1).fill(0);
  for (const update of updates) {
    const [start, end, value] = update;
    diff[start] += value;
    diff[end + 1] -= value;
  }

  let cum = 0;
  const arr = Array(length).fill(0);
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    cum += diff[i];
    arr[i] = cum;
  }

  return arr;
};

// * 1차 풀이 - (25.10.10) - 성공(비효율적)
// ? 업데이트 개수를 U, 배열 길이를 N이라고 할 때
// ? 시간복잡도: O(U * N)
// ? 공간복잡도: O(N)
var getModifiedArray = function (length, updates) {
  const arr = Array(length).fill(0);
  for (const update of updates) {
    const [start, end, value] = update;
    for (let i = start; i <= end; i++) {
      arr[i] += value;
    }
  }
  return arr;
};
