// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.11.06) - 실패

var search = function (nums, target) {
  const n = nums.length;
  let lp = 0;
  let rp = n - 1;
  // ! = 조건이 있어야 마지막원소(lp===rp)까지 포함
  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);
    const cur = nums[mid];
    if (cur === target) return mid;
    else if (cur > target) {
      rp = mid - 1;
    } else {
      lp = mid + 1;
    }
  }
  return -1;
};

// * 1차 풀이 - (25.09.07) - 정답

var search = function (nums, target) {
  const n = nums.length;
  let lp = 0;
  let rp = n - 1;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      rp = mid - 1;
    } else {
      lp = mid + 1;
    }
  }
  return -1;
};
