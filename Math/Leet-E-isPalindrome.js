// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.10.03) - 정답
// ?	시간 복잡도: O(log n) (자릿수 d = log10(n))
// ?	공간 복잡도: O(log n) (문자열/배열 복사 때문에)
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x === 0) return true;

  return String(x).split('').reverse().join('') === String(x);
};

// * 1차 풀이 - (25.10.03) - 정답
var isPalindrome = function (x) {
  if (x < 0) return false;
  const n = str.length;

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[n - i - 1]) return false;
  }
  return true;
};
