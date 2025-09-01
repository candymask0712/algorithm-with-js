// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.09.01) - 틀림 (정답보고 작성)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let lp = 0;
  let zeros = 0;
  let max = 0;
  const n = nums.length;
  for (let rp = 0; rp < n; rp++) {
    if (nums[rp] === 0) zeros++;
    while (zeros > k) {
      if (nums[lp] === 0) {
        zeros--;
      }
      lp++; // ! 처음에 if 문보다 위에 있어서 오답
    }
    const len = rp - lp + 1;
    if (len > max) max = len;
  }
  return max;
};
