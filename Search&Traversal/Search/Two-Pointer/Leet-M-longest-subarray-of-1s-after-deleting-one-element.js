// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.09.01) - 정답 (충분히 한 번에 풀 수 있는 문제인데 너무 해맸다)

var longestSubarray = function (nums) {
  let lp = 0;
  let chance = 1;
  let max = 0;
  const n = nums.length;
  for (let rp = 0; rp < n; rp++) {
    if (nums[rp] === 0) {
      chance--;
    }
    while (chance < 0) {
      if (nums[lp] === 0) {
        chance++;
      }
      lp++;
    }
    const len = rp - lp; // ! 처음에 rp - lp + 1 이라고 작성해서 오답
    if (len > max) max = len;
  }
  return max;
};
