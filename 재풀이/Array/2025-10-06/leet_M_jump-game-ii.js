// * 문제
// *

//
//

// * 모범 답안
// ?	시간복잡도: O(n)
// ? 	공간복잡도: O(1)
var jump = function (nums) {
  const n = nums.length;
  if (n <= 1) return 0;

  let jumps = 0;
  let curEnd = 0; // 현재 점프로 도달 가능한 구간의 끝
  let farthest = 0; // 다음 점프 때 도달 가능한 최장 거리

  for (let i = 0; i < n - 1; i++) {
    // i 위치에서 갈 수 있는 최장거리 갱신
    farthest = Math.max(farthest, i + nums[i]);

    // 현재 점프로 커버하던 구간이 끝났으면 점프 1회 소모
    // ! 그리디 적으로  커버하던 구간이 끝났을 때 갱신 필요
    if (i === curEnd) {
      jumps++;
      curEnd = farthest;

      // 이미 끝까지 도달 가능하면 종료
      if (curEnd >= n - 1) break;
    }
  }

  return jumps;
};

// * 4차 풀이 - (25.11.19) - 실패
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length;
  if (nums.length === 1) return 0;

  let max = 0;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const limit = i + nums[i];
    if (limit > max) {
      console.log(i, limit, max, answer);
      answer++;
      max = limit;
    }
  }
  return answer - 1;
};

// * 3차 풀이 - (25.11.10) - 실패 (그리디 로직 문제)
var jump = function (nums) {
  let farthest = 0;
  let jumpCount = 0;

  if (nums.length === 1) return 0;

  for (let i = 0; i < nums.length; i++) {
    const curBest = nums[i] + i;

    // ! 단순히 farthest 보다 curBest가 클 때 모두 갱신하면 비효율적으로 점프 가능
    if (curBest > farthest) {
      farthest = curBest;
      jumpCount++;
      if (farthest >= nums.length - 1) return jumpCount;
    }
  }
};

// * 2차 풀이 - (25.11.10) - 실패 (시간복잡도)
// ! 중복방문 없애면 개선 가능
// ?	시간복잡도: O(n²)~O(n³)
// ? 	공간복잡도: O(n²)

var jump = function (nums) {
  const q = [];
  q.push([0, 0]);

  while (q.length) {
    const [position, trial] = q.shift();
    if (position === nums.length - 1) return trial;
    const maxRange = nums[position];
    for (let range = 1; range <= maxRange; range++) {
      q.push([position + range, trial + 1]);
    }
  }
};

// * 1차 풀이 - (25.10.03) - 성공
// ?	시간복잡도: O(2^n)
// ? 	공간복잡도: O(n)
var jump = function (nums) {
  const n = nums.length;
  const isVisited = Array(n).fill(false);

  const q = [];
  q.push([0, 0]);
  isVisited[0] = true;
  while (q.length) {
    const [curIndex, jumpCount] = q.shift();
    if (curIndex === n - 1) {
      return jumpCount;
    }
    const maxDistance = nums[curIndex];
    for (let i = 1; i <= maxDistance; i++) {
      const nextIndex = curIndex + i;
      if (isVisited[nextIndex]) continue;
      isVisited[nextIndex] = true;
      q.push([nextIndex, jumpCount + 1]);
    }
  }
};

// * 나의 풀이
// ! dp방식 사용 시 시간복잡도가 하위권
var jump = function (nums) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => 10001);
  dp[0] = 0;
  nums.forEach((num, index) => {
    for (let i = 1; i <= num; i++) {
      dp[index + i] = Math.min(dp[index] + 1, dp[index + i]);
    }
  });
  return dp[n - 1];
};

// * 참고 풀이
var jump = function (nums) {
  let jumps = 0;
  let currentMax = 0; // 현재 점프로 도달할 수 있는 최대 거리
  let farthest = 0; // 지금까지 도달 가능한 가장 먼 위치

  // 마지막 위치는 확인할 필요가 없으므로 n-1까지만 순회
  for (let i = 0; i < nums.length - 1; i++) {
    // 현재 위치에서 도달할 수 있는 가장 먼 거리 갱신
    farthest = Math.max(farthest, i + nums[i]);

    // 현재 점프로 갈 수 있는 최대 거리에 도달했다면
    if (i === currentMax) {
      jumps++; // 점프 횟수 증가
      currentMax = farthest; // 다음 점프로 갈 수 있는 최대 거리 갱신
    }
  }

  return jumps;
};
