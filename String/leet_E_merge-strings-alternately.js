// * 문제
// *

//
//

// * 모범 답안
function mergeAlternately(word1, word2) {
  let i = 0;
  let j = 0;
  const n1 = word1.length;
  const n2 = word2.length;
  let merged = '';

  // 두 포인터로 번갈아 추가
  while (i < n1 || j < n2) {
    if (i < n1) merged += word1[i++];
    if (j < n2) merged += word2[j++];
  }

  return merged;
}

// * 3차 풀이

// * 2차 풀이 -  (25.08.24)

var mergeAlternately = function (word1, word2) {
  let p1 = 0;
  let p2 = 0;
  let answer = '';
  while (p1 < word1.length || p2 < word2.length) {
    if (p1 < word1.length) answer += word1[p1++];
    if (p2 < word2.length) answer += word2[p2++];
  }
  return answer;
};

// * 1차 풀이 -  정답
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const n = Math.min(word1.length, word2.length);
  let answer = '';
  for (let i = 0; i < n; i++) {
    answer += word1[i];
    answer += word2[i];
  }
  const word1Diff = word1.length - n;
  const word2Diff = word2.length - n;

  if (word1Diff > 0) {
    answer += word1.slice(word1.length - word1Diff);
  }
  if (word2Diff > 0) {
    answer += word2.slice(word2.length - word2Diff);
  }

  return answer;
};
