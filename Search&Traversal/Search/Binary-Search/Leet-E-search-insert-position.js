// * 문제
// *

//
//

// * 모범 답안
var searchInsert = function (nums, target) {
  let lp = 0;
  let rp = nums.length - 1;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      lp = mid + 1;
    } else {
      rp = mid - 1;
    }
  }

  return lp;
};
// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - 틀림=-

var searchInsert = function (nums, target) {
  const n = nums.length;
  let lp = 0;
  let rp = n - 1;

  if (target <= nums[lp]) return 0;
  if (target >= nums[rp]) return n;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);
    const prev = nums[mid - 1]; // ! target이 중간에 위치하면 앞뒤로 조회해야는 로직이 애매함
    const next = nums[mid + 1];

    if (mid >= prev && mid <= next) {
    }
  }
};
