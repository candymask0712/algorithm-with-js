// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이 - 실패 (26.1.1) - 답보고 풀이
//? 시간복잡도: O(m × n) (m = source.length, n = target.length)
//? 공간복잡도: O(1)
var shortestWay = function (source, target) {
  let count = 0;
  let p = 0;

  while (p < target.length) {
    let moved = false;

    // ! i < source.length && p < target.length 조건으로 해야 source가 긴 경우 불필요한 연산안함
    for (let i = 0; i < source.length; i++) {
      if (target[p] === source[i]) {
        p++;
        moved = true;
      }
    }

    if (!moved) return -1;

    count++;
  }

  return count;
};

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  // 빠른 불가능 체크: target의 어떤 문자라도 source에 없으면 -1
  const have = new Array(26).fill(false);
  for (let i = 0; i < source.length; i++) {
    have[source.charCodeAt(i) - 97] = true;
  }
  for (let i = 0; i < target.length; i++) {
    if (!have[target.charCodeAt(i) - 97]) return -1;
  }

  let count = 0;
  let t = 0; // target pointer

  while (t < target.length) {
    let moved = false; // 이번 source 스캔에서 target을 전진시켰는지
    for (let s = 0; s < source.length && t < target.length; s++) {
      if (source[s] === target[t]) {
        t++;
        moved = true;
      }
    }

    // source를 한 번 훑었으면 subsequence 하나 쓴 것
    count++;

    // 이 케이스는 위 "불가능 체크"로 거의 막히지만, 안전장치로 남겨둠
    if (!moved) return -1;
  }

  return count;
};
