// * 문제
// *

//
//

// * 모범 답안
var search = function (nums, target) {
  let lp = 0;
  let rp = nums.length - 1;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);
    const midVal = nums[mid];

    // 찾은 경우
    if (midVal === target) return mid;

    // 왼쪽 구간이 정렬된 경우
    if (nums[lp] <= midVal) {
      // target이 왼쪽 정렬 구간 안에 있는가?
      if (nums[lp] <= target && target < midVal) {
        rp = mid - 1; // 왼쪽으로 좁힘
      } else {
        lp = mid + 1; // 오른쪽으로 이동
      }
    } else {
      // 오른쪽 구간이 정렬된 경우
      if (midVal < target && target <= nums[rp]) {
        lp = mid + 1; // 오른쪽으로 좁힘
      } else {
        rp = mid - 1; // 왼쪽으로 이동
      }
    }
  }

  return -1;
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.11.08) - 틀림
