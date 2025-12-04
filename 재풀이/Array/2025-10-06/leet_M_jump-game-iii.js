// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.11.21) - 성공

var canReach = function (arr, start) {
  const q = [];
  q.push([start, 0]);

  const visited = Array(arr.length).fill(false);
  visited[start] = true;

  while (q.length) {
    const [curIndex, count] = q.shift();
    if (arr[curIndex] === 0) return true;

    const step = arr[curIndex];
    const goStep = curIndex + step;
    const backStep = curIndex - step;
    if (goStep < arr.length && !visited[goStep]) {
      q.push([curIndex + step, count + 1]);
      visited[goStep] = true;
    }
    if (backStep >= 0 && !visited[backStep]) {
      q.push([backStep, count + 1]);
      visited[backStep] = true;
    }
  }
  return false;
};
// * 1차 풀이 - (25.11.21) - 성공
// ?	시간복잡도: O(2^n)
// ? 	공간복잡도: O(n)
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
