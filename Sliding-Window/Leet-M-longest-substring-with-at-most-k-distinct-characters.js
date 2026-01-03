// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O(n) (n = s.length)
//? 공간복잡도: O(k)
var lengthOfLongestSubstringKDistinct = function (s, k) {
  let lp = 0;
  const h = new Map();
  let answer = 0;

  for (let rp = 0; rp < s.length; rp++) {
    const cur = s[rp];
    h.set(cur, (h.get(cur) || 0) + 1);
    while (h.size > k) {
      const prev = s[lp];
      if (h.get(prev) === 1) {
        h.delete(prev);
      } else {
        h.set(prev, h.get(prev) - 1);
      }
      lp++;
    }
    answer = Math.max(answer, rp - lp + 1);
  }

  return answer;
};

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
