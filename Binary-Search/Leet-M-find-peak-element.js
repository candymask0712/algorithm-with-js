// * 문제
// *

//
//

// * 모범 답안

// * 4차 풀이
var findPeakElement = function (nums) {
  const n = nums.length;
  let lp = 0;
  let rp = n - 1;

  while (lp < rp) {
    const mid = Math.floor((rp + lp) / 2);
    const leftNum = nums[mid];
    const rightNum = nums[mid + 1];
    if (leftNum > rightNum) {
      rp = mid;
    } else {
      lp = mid + 1;
    }
  }
  return lp;
};

// * 3차 풀이

var findPeakElement = function (nums) {
  const n = nums.length;
  let lp = 0;
  let rp = n - 1;

  // ! 👉 while (lp < rp) 으로 두 포인터가 “한 칸으로 좁혀질 때”까지 반복합니다.
  // ! 등호(<=)를 쓰면 mid+1 인덱스 접근(nums[mid+1])이 터질 위험이 있습니다.
  while (lp < rp) {
    const mid = Math.floor((rp + lp) / 2);

    // ! 이 경우, 지금 mid의 값이 오른쪽보다 크다는 뜻
    // ! 즉, peak은 mid 또는 왼쪽에 있음.
    // ! rp = mid (mid 포함) 으로 이동.
    if (nums[mid] > nums[mid + 1]) {
      rp = mid;
      // ! 이 경우는 mid가 오른쪽보다 작다는 뜻
      // ! peak은 mid 보다 오른쪽에 있음.
      // ! lp = mid + 1 (mid 제외) 으로 이동.
    } else {
      lp = mid + 1;
    }
  }
  return lp;
  //  ! ✅ while (lp < rp) → 루프 종료 시 lp === rp
  // ! 이때 하나의 원소가 남고, 그게 곧 peak!
  return lp;
};

// * 2차 풀이
var findPeakElement = function (nums) {
  const n = nums.length;
  let lp = 0;
  let rp = n - 1;
  let mid = Math.floor((lp + rp) / 2);

  while (lp < rp) {
    const prev = mid > 0 ? nums[mid - 1] : -Infinity;
    const cur = nums[mid];
    const next = mid < n ? nums[mid + 1] : -Infinity;

    if (cur > prev && cur > next) return mid;
    else if (cur < prev) {
      rp = mid - 1;
    } else {
      lp = mid + 1;
    }
    mid = Math.floor((lp + rp) / 2);
  }
  return lp;
};

// * 1차 풀이 - (25.09.06) - 틀림
// ? 시간복잡도 O(log n)
// ? 공간복잡도 O(1)

var findPeakElement = function (nums) {
  const n = nums.length;
  if (n === 1) return 0;
  let lp = 0;
  let rp = n - 1;

  while (lp <= rp) {
    const mid = Math.floor((rp + lp) / 2);
    if (nums[mid] < nums[mid + 1]) {
      lp = mid + 1;
    } else {
      rp = mid - 1;
    }
  }
  return lp;
};
