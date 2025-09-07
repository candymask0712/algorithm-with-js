// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.09.07) - 정답

var searchInsert = function (nums, target) {
  const n = nums.length;
  let lp = 0;
  let rp = n - 1;

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

// * 1차 풀이 - 실패
// ! 딱 맞는 숫자가 업는 것을 복잡한 조건으로 풀이하려고 함
