// * 문제
// *

//
//

// * 모범 답안

var numSubarrayProductLessThanK = function (nums, k) {
  // 곱은 항상 1 이상이므로, k <= 1이면 어떤 subarray도 product < k 만족 불가
  if (k <= 1) return 0;

  let lp = 0;
  let total = 1;
  let answer = 0;

  for (let rp = 0; rp < nums.length; rp++) {
    total *= nums[rp];

    // 현재 윈도우 [lp..rp] 의 곱이 k 이상이면, 왼쪽을 줄이면서 다시 k 미만으로 맞춘다
    while (total >= k && lp <= rp) {
      total /= nums[lp];
      lp++;
    }

    // 이제 [lp..rp] 의 곱은 < k 이므로,
    // rp에서 끝나는 모든 유효한 subarray 개수는 (rp - lp + 1)
    answer += rp - lp + 1;
  }

  return answer;
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(1)
var numSubarrayProductLessThanK = function (nums, k) {
  let lp = 0;
  let total = 1;
  let answer = 0;

  for (let rp = 0; rp < nums.length; rp++) {
    total *= nums[rp];

    while (total >= k && lp < rp) {
      total /= nums[lp];
      lp++;
    }
    // ! 처음에 아래 식을 생각못해 해맴
    if (total < k) answer += rp - lp + 1;
  }
  return answer;
};
// ! lp < rp 는 lp <= rp 이 되어야 함
// 너 코드에서는 lp < rp 라서, 윈도우 길이가 1(lp === rp)이고 total >= k 인 경우에는 그 자리를 바로 줄이지 않고, 다음 rp에서야 줄이기 시작해.

// 예를 들어:
// 	•	nums = [100, 2], k = 50

// rp = 0:
// 	•	total = 100, lp = 0, rp = 0
// 	•	while 조건: total>=k (100≥50) 이지만 lp<rp (0<0) false → 안 줄임
// 	•	total<k? false → answer 그대로

// rp = 1:
// 	•	total = 100 * 2 = 200
// 	•	while: total>=k && lp<rp → 200>=50 && 0<1 → true
// → total /= nums[0] → 2, lp = 1
// 	•	total<k → 2<50 → answer += 1 (subarray [2])
