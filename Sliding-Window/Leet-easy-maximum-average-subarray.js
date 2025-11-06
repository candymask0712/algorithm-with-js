// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - 실패
var findMaxAverage = function (nums, k) {
  let sum = 0; // maxSum에 대한 별도 변수 필요
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  const n = nums.length;
  for (let i = 0; i < n - k; i++) {
    let newSum = sum - nums[i] + nums[i + k];
    sum = Math.max(sum, newSum); // ! 최대값 갱신을 통해 sum이 변동됨
  }
  return sum / k;
};
