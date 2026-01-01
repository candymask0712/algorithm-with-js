// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O(n) (n = s.length)
//? 공간복잡도: O(1)

var canPermutePalindrome = function (s) {
  const h = new Map();
  for (const char of s) {
    h.set(char, (h.get(char) || 0) + 1);
  }

  let oddNumCount = 0;

  for (const [char, count] of h) {
    if (count % 2 !== 0) oddNumCount++;
    if (oddNumCount > 1) return false;
  }
  return true;
};

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
var canPermutePalindrome = function (s) {
  const oddSet = new Set();

  for (const ch of s) {
    if (oddSet.has(ch)) oddSet.delete(ch);
    else oddSet.add(ch);
  }

  return oddSet.size <= 1;
};
