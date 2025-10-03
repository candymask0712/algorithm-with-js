// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.10.02) - 실패 (답 참고해서 풀이)
function rob(nums) {
  let prev1 = 0;
  let prev2 = 0;

  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const caseTakeSum = prev2 + nums[i];
    const caseSkipSum = prev1;
    nums[i] = Math.max(caseTakeSum, caseSkipSum);

    prev2 = prev1;
    prev1 = nums[i];
  }

  return prev1;
}
