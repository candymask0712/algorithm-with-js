// * 문제
// *

//
//

// * 모범 답안
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let best = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const area = h * (right - left);
    if (area > best) best = area;
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return best;
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.08.27) - 브루트포스로 풀어 시간초과
var maxArea = function (height) {
  let max = 0;
  const n = height.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const h = Math.min(height[i], height[j]);
      const w = j - i;
      if (h * w > max) max = h * w;
    }
  }
  return max;

  return best;
};
