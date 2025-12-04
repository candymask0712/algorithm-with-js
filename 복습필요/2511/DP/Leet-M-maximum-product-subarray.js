// * 문제
// *

//
//

// * 모범 답안
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(1)
var maxProduct = function (nums) {
  // 현재 인덱스에서 끝나는 subarray 중 "최댓값 곱"
  let max = nums[0];
  // 현재 인덱스에서 끝나는 subarray 중 "최솟값 곱" (가장 큰 음수일 가능성)
  let min = nums[0];
  // 지금까지의 전체 subarray 중 최대 곱 (정답)
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];

    // 음수일 경우, 기존에 최대였던 값이 음수를 곱하면서 최솟값이 될 수 있고
    // 기존 최솟값(큰 음수)이 음수를 만나면서 최대가 될 수 있으므로 swap
    if (cur < 0) {
      let tmp = max;
      max = min;
      min = tmp;
    }

    // 현재 값 하나로 "새로 시작"할지,
    // 이전 subarray 곱에 이어붙일지 선택
    max = Math.max(cur, max * cur);
    min = Math.min(cur, min * cur);

    // 현재 위치에서의 최대 곱이 전체 결과보다 크면 갱신
    if (max > answer) answer = max;
  }

  return answer;
};

// * 3차 풀이

// * 2차 풀이 - (25.11.21) - 성공
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(1)
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let answer = sum;
  // ! 경계값 처리 떼무넹 시간 지연
  for (let i = 1; i < nums.length - k + 1; i++) {
    sum += nums[i + k - 1] - nums[i - 1];
    if (sum > answer) answer = sum;
  }

  return answer / k;
};

// * 1차 풀이
// ! 음수가 있어 일반적인 슬라이딩윈도우로 풀이 불가
var maxProduct = function (nums) {
  let lp = 0;
  let total = 1;
  let answer = 0;

  for (let rp = 0; rp < nums.length; rp++) {
    total *= nums[rp];

    while (lp <= rp) {
      if (total > answer) answer = total;
      total /= nums[lp];
      lp++;
    }
  }
  return answer;
};
