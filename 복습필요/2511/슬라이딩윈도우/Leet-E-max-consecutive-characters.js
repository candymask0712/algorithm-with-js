// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
// ! 단일포인터 슬라이딩 윈도우
// ? 시간복잡도: O(n)
// ? 시간복잡도: O(1)

var maxPower = function (s) {
  let maxLen = 1;
  let curLen = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) curLen++;
    else curLen = 1;
    if (curLen > maxLen) maxLen = curLen;
  }
  return maxLen;
};
