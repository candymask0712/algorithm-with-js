// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.10.03) - 실패
// ?	시간 복잡도: O(n)
// ?	공간 복잡도: O(1)
var majorityElement = function (nums) {
  let candidate;
  let count = 0;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
};
