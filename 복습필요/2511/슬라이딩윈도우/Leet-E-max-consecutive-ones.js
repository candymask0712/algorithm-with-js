// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
// ! 단일포인터 슬라이딩 윈도우
// ? 시간복잡도: O(n)
// ? 시간복잡도: O(1)

var findMaxConsecutiveOnes = function (nums) {
  let maxLen = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      count++;
      if (count > maxLen) maxLen = count;
    } else {
      count = 0;
    }
  }
  return maxLen;
};
