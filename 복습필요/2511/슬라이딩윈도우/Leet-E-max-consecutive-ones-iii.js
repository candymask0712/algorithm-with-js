// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
// ? 시간복잡도: O(n)
// ? 시간복잡도: O(1)
var findMaxConsecutiveOnes = function (nums) {
  let lp = 0;
  let maxLen = 0;

  let k = 1;

  for (let rp = 0; rp < nums.length; rp++) {
    if (nums[rp] === 0) k--;

    while (k < 0) {
      if (nums[lp] === 0) k++;
      lp++;
    }
    const curLen = rp - lp + 1;

    if (curLen > maxLen) maxLen = curLen;
  }
  return maxLen;
};
