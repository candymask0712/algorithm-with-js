// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이
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
// * 1차 풀이

// ! target 보다 큰 값이 아니라 완전히 같을 때만 계산
var minSubArrayLen = function (target, nums) {
  let lp = 0,
    rp = 0;
  const n = nums.length;
  let sum = nums[lp];
  const max = Number.MAX_SAFE_INTEGER;
  let answer = max;
  while (lp <= rp && rp < n && lp < n) {
    console.log(lp, rp, sum);
    if (sum >= target) {
      const length = rp - lp + 1;
      answer = Math.min(length, answer);
      rp++;
      sum += nums[rp];
    } else if (sum > target) {
      sum -= nums[lp];
      lp++;
    } else {
      rp++;
      sum += nums[rp];
    }
  }

  return answer === max ? 0 : answer;
};
