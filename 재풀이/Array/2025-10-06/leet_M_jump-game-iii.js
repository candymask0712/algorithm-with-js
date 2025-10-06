// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.10.03) - 정답

// * 1차 풀이 - (25.10.03) - 성공
// ?	시간복잡도: O(2^n)
// ? 	공간복잡도: O(n)
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const n = arr.length;
  const isVisited = Array(n).fill(false);
  const isVaild = (x) => x >= 0 && x < n;

  const q = [];
  q.push(start);
  isVisited[start] = true;

  while (q.length) {
    const curIndex = q.shift();
    if (arr[curIndex] === 0) {
      return true;
    }
    const distance = arr[curIndex];
    for (const next of [curIndex + distance, curIndex - distance]) {
      if (!isVisited[next] && isVaild(next)) {
        isVisited[next] = true;
        q.push(next);
      }
    }
  }
  return false;
};
