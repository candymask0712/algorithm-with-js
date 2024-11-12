var longestConsecutive = function (nums) {
  // 빈 배열 처리
  if (nums.length === 0) return 0;

  // 중복 제거를 위해 Set 생성
  const numSet = new Set(nums);
  let maxLength = 0;

  // 각 숫자에 대해 연속된 수열 확인
  for (const num of numSet) {
    // 현재 숫자가 수열의 시작점인 경우만 처리
    // num-1이 존재하면 현재 숫자는 시작점이 아님
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // 연속된 수가 존재하는 동안 길이 증가
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      // 최대 길이 갱신
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};
