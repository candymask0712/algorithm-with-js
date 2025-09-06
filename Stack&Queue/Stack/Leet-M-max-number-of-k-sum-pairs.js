// * 문제
// *

//
//

// * 모범 답안
var maxOperations = function (nums, k) {
  let ops = 0;
  const cnt = new Map(); // 값 -> 남은 개수

  for (const x of nums) {
    const need = k - x;
    const have = cnt.get(need) || 0;

    if (have > 0) {
      // 보수가 재고에 있으면 짝을 만들어 제거
      cnt.set(need, have - 1);
      ops += 1;
    } else {
      // 없으면 x를 재고에 쌓음
      cnt.set(x, (cnt.get(x) || 0) + 1);
    }
  }

  return ops;
};
// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.09.05) - 정답

var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let lp = 0;
  let rp = nums.length - 1;
  let answer = 0;

  while (lp < rp) {
    const sum = nums[lp] + nums[rp];
    if (sum === k) {
      answer++;
      lp++;
      rp--;
    }
    if (sum > k) rp--;
    if (sum < k) lp++;
  }

  return answer;
};
