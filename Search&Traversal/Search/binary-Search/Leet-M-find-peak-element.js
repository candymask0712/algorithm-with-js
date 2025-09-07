// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.09.06) - 틀림
// ? 시간복잡도 O(log n)
// ? 공간복잡도 O(1)

var findPeakElement = function (nums) {
  const n = nums.length;
  if (n === 1) return 0;
  let lp = 0;
  let rp = n - 1;

  while (lp <= rp) {
    const mid = Math.floor((rp + lp) / 2);
    if (nums[mid] < nums[mid + 1]) {
      lp = mid + 1;
    } else {
      rp = mid - 1;
    }
  }
  return lp;
};
