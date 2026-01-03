// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이 - (26.01.02) - 실패

// * 참고 풀이
//? 시간복잡도: O(n) (n = sentence1.length)
//? 공간복잡도: O(m) (m = similarPairs.length)
var areSentencesSimilar = function (sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) return false;

  const pairSet = new Set();

  for (const [a, b] of similarPairs) {
    pairSet.add(a + '#' + b);
    pairSet.add(b + '#' + a);
  }

  for (let i = 0; i < sentence1.length; i++) {
    const a = sentence1[i];
    const b = sentence2[i];

    if (a === b) continue;
    if (!pairSet.has(a + '#' + b)) return false;
  }

  return true;
};
