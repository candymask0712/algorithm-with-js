// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O(n) (n = nums1.length) (새배열 생성하지 않는 경우)
//? 공간복잡도: O(n) (n = nums2.length)

var anagramMappings = function (nums1, nums2) {
  const h = new Map();
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    // ! 매번 새배열 생성하지 않고 이미 존재하는 배열에 추가하는 것이 더 좋음
    // if (!h.has(num)) h.set(num, []);
    // h.get(num).push(i);
    h.set(num, h.has(num) ? [...h.get(num), i] : [i]);
  }

  return nums1.map((num) => {
    return h.get(num).pop();
  });
};

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
