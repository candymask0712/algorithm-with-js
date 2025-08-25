// * 문제
// *

//
//

// * 모범 답안
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = Array(n).fill(1);

  let leftProduct = 1;
  // 자기보다 왼쪽까지의 곱을 answer에 저장
  for (let i = 0; i < n; i++) {
    // leftProduct(왼쪽까지의 곱)을 answer에 저장
    answer[i] *= leftProduct;
    // leftProduct에 현재 요소를 추가해서 업데이트
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  // 자기보다 오른쪽까지의 곱을 answer에 저장
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.08.24) - 틀림
