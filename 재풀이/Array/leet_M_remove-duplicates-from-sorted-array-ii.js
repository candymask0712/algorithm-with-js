// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이
var removeDuplicates = function (nums) {
  let i = 0;

  for (const num of nums) {
    if (i < 2 || num !== nums[i - 2]) {
      nums[i] = num;
      i++;
    }
  }
  return i;
};

// * 1차 풀이 - (25.10.03) - 정답
// ! 정렬되어 있어서 추가적인 Set 불필요
// ?	시간 복잡도: O(n)
// ?	공간 복잡도: O(n)
var removeDuplicates = function (nums) {
  const unique = new Set();
  let k = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (!unique.has(num)) {
      nums[k] = num;
      unique.add(num);
      k++;
    }
  }
  return k;
};
