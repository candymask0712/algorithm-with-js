// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
// ? 시간복잡도: O(log(n))
// ? 공간복잡도: O(1)
var searchRange = function (nums, target) {
  const n = nums.length;

  const getFirstPosition = () => {
    let lp = 0;
    let rp = n - 1;
    let res = -1;
    // ! 바운더리라고 생각해 = 없이 풀이
    // ! 실제로는 계속 정확한 값을 찾아 갱신해야 함
    while (lp <= rp) {
      const mid = Math.floor((lp + rp) / 2);
      const midVal = nums[mid];
      if (midVal >= target) {
        rp = mid - 1;
        if (midVal === target) res = mid;
      } else {
        lp = mid + 1;
      }
    }
    return res;
  };

  const getLastPositoin = () => {
    let lp = 0;
    let rp = n - 1;
    let res = -1;
    while (lp <= rp) {
      const mid = Math.floor((lp + rp) / 2);
      const midVal = nums[mid];
      if (midVal <= target) {
        lp = mid + 1;
        if (midVal === target) res = mid;
      } else {
        rp = mid - 1;
      }
    }
    return res;
  };

  const firstIndex = getFirstPosition();
  const LastIndex = getLastPositoin();

  return [firstIndex, LastIndex];
};
