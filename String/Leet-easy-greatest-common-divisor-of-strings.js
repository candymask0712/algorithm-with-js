// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  function gcd(a, b) {
    if (a % b === 0) return b;
    return gcd(b, a % b);
  }
  const len = gcd(str1.length, str2.length);
  return str1.slice(0, len);
};
