// 나의 풀이

// ! target 보다 큰 값이 아니라 완전히 같을 때만 계산
var minSubArrayLen = function (target, nums) {
  let lp = 0,
    rp = 0;
  const n = nums.length;
  let sum = nums[lp];
  const max = Number.MAX_SAFE_INTEGER;
  let answer = max;
  while (lp <= rp && rp < n && lp < n) {
    console.log(lp, rp, sum);
    if (sum >= target) {
      const length = rp - lp + 1;
      answer = Math.min(length, answer);
      rp++;
      sum += nums[rp];
    } else if (sum > target) {
      sum -= nums[lp];
      lp++;
    } else {
      rp++;
      sum += nums[rp];
    }
  }

  return answer === max ? 0 : answer;
};

//  참고 풀이
var minSubArrayLen = function (target, nums) {
  let minLength = Infinity;
  let currentSum = 0;
  let left = 0;

  // 오른쪽 포인터를 이동하면서 윈도우 확장
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    // 현재 합이 target 이상이면 왼쪽 포인터를 이동하며 최소 길이 갱신
    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

// 나의 풀이 - 2
var minSubArrayLen = function (target, nums) {
  const n = nums.length;
  let lp = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let rp = 0; rp < n; rp++) {
    sum += nums[rp];
    while (sum >= target) {
      minLength = Math.min(rp - lp + 1, minLength);
      sum -= nums[lp];
      lp++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
