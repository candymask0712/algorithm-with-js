// * 문제
// *

//
//

// * 모범 답안

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // prefixSum 값이 몇 번 나왔는지 세는 Map
  const countMap = new Map();
  countMap.set(0, 1); // prefixSum이 0인 경우 1번 있다고 가정 (빈 구간)

  let prefixSum = 0;
  let answer = 0;

  for (const num of nums) {
    prefixSum += num;

    // prefixSum - k == 이전의 prefixSum 이었던 적이 있으면,
    // 그 개수만큼 "합이 k인 subarray"가 현재 위치에서 끝남.
    const target = prefixSum - k;
    if (countMap.has(target)) {
      answer += countMap.get(target);
    }

    // 현재 prefixSum을 Map에 기록
    const prevCount = countMap.get(prefixSum) ?? 0;
    countMap.set(prefixSum, prevCount + 1);
  }

  return answer;
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
