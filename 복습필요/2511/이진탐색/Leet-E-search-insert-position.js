// * 문제
// *

//
//

// * 모범 답안
var searchInsert = function (nums, target) {
  let lp = 0;
  let rp = nums.length - 1;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      lp = mid + 1;
    } else {
      rp = mid - 1;
    }
  }

  return lp;
};
// * 3차 풀이

// * 2차 풀이 - 성공
var searchInsert = function (nums, target) {
  const n = nums.length;
  let lp = 0;
  let rp = n - 1;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);
    const cur = nums[mid];
    if (cur === target) return mid;
    else if (cur > target) {
      rp = mid - 1;
    } else {
      lp = mid + 1;
    }
  }
  // ! +1를 해주거나 lp를 반환해야 하는 이유
  //  이진 탐색에서 while (lp <= rp)를 쓰면
  //  루프가 끝난 뒤엔 항상 다음이 성립
  // * rp < lp
  // * rp: target보다 작은 값 중 가장 오른쪽 인덱스
  // * lp: target보다 크거나 같은 값의 첫 인덱스 (=삽입 위치)

  return Math.floor((lp + rp) / 2) + 1;
};

// * 1차 풀이 - 틀림=-

var searchInsert = function (nums, target) {
  const n = nums.length;
  let lp = 0;
  let rp = n - 1;

  if (target <= nums[lp]) return 0;
  if (target >= nums[rp]) return n;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);
    const prev = nums[mid - 1]; // ! target이 중간에 위치하면 앞뒤로 조회해야는 로직이 애매함
    const next = nums[mid + 1];

    if (mid >= prev && mid <= next) {
    }
  }
};
