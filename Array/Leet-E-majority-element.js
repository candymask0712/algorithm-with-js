// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.11.21) - 실패 (답보고 풀이)
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(1)
var majorityElement = function (nums) {
  let major = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    nums[i] === major ? count++ : count--;
    if (count === 0) {
      major = nums[i];
      count = 1;
    }
  }
  return major;
};

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
