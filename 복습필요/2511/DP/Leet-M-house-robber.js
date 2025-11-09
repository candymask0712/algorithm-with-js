// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이 (25.11.08) - 실패

var rob = function (nums) {
  const n = nums.length;

  //  ! 예외처리 하지않아 오류 발생
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  // ! 공간 복잡도 최적화를 위해 배열 대신 변수 사용
  let prev2step = nums[0];
  let prev1step = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    const cur = Math.max(prev1step, prev2step + nums[i]);

    prev2step = prev1step;
    prev1step = cur;
  }

  return prev1step;
};

// * 2차 풀이 (25.11.08) - 성공

var rob = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[n - 1];
};

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
