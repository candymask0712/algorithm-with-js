// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false; // ! 필요한 부분

  const n = word1.length;
  const h1 = new Map();
  const h2 = new Map();

  for (let i = 0; i < n; i++) {
    const char1 = word1[i];
    const char2 = word2[i];
    h1.set(char1, h1.get(char1) + 1 || 1); // ! 처음에  +1 를 해주지 않아 해맴
    h2.set(char2, h2.get(char2) + 1 || 1);
  }

  const keys1 = [...h1.keys()].sort(); // ! 처음에는 key를 비교하지 않아 실패
  const keys2 = [...h2.keys()].sort();

  const nums1 = [...h1.values()].sort((a, b) => a - b);
  const nums2 = [...h2.values()].sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (nums1[i] !== nums2[i]) return false;
    if (keys1[i] !== keys2[i]) return false;
  }

  return true;
};
