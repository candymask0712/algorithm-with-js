// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.08.23) - 정답
var pivotIndex = function (nums) {
  let rightSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i]; // ! 왼쪽합 갱신을 늦추는 것이 중요
  }
  return -1;
};
