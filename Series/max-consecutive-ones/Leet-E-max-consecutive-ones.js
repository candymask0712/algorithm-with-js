// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.12.25)
// ? 시간복잡도: O(n)
// ? 시간복잡도: O(1)
var findMaxConsecutiveOnes = function (nums) {
  let answer = 0;
  let len = 0;
  for (const num of nums) {
    if (num === 1) {
      len++;
      answer = Math.max(len, answer);
    } else {
      // ! 처음에는 갱신 로직 두 군데 모두 추가
      // ! 길이 갱신 후 답 갱신도 진행하므로 중복
      answer = Math.max(len, answer);
      len = 0;
    }
  }

  return answer;
};

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
