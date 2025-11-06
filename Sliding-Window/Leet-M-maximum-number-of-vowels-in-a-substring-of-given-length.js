// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.08.24) - 정답 (충분히 한 번에 풀 수 있는 문제인데 너무 해맸다)

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
var maxVowels = function (s, k) {
  let max = 0;
  let curVowelCount = 0;

  for (let i = 0; i < k; i++) {
    if (VOWELS.includes(s[i])) {
      curVowelCount++;
    }
  }
  max = curVowelCount;
  const n = s.length;
  for (let lp = 1; lp < n - k + 1; lp++) {
    if (VOWELS.includes(s[lp - 1])) curVowelCount--;
    if (VOWELS.includes(s[lp + k - 1])) curVowelCount++;
    if (curVowelCount > max) max = curVowelCount;
  }
  return max;
};
