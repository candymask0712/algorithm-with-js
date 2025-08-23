// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // ! 변환이 많은 것 같아 망설였는데 유니크한 값들에서 찾는 것이 깔끔
  // nums1에만 존재하는 값들
  const diff1 = [...set1].filter((x) => !set2.has(x));

  // nums2에만 존재하는 값들
  const diff2 = [...set2].filter((x) => !set1.has(x));

  return [diff1, diff2];
};

// * 1차 풀이 - (25.08.23) - 실패
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const unique1 = nums1.filter((num) => {
    console.log(num, set2.has(num));
    if (set2.has(num)) {
      set2.add(num);
      return false;
    } else {
      return true;
    }
  });
  const unique2 = nums2.filter((num) => {
    // console.log(num, set1.has(num))
    if (set1.has(num)) {
      set1.add(num);
      return false;
    } else {
      return true;
    }
  });

  return [unique1, unique2];
};
