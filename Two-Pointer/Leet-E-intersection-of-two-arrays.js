// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.11.11) - 성공
// ? 시간복잡도: O(m log m + n log n)
// ? 공간복잡도: O(m) or O(n)
// k는 공통 원소의 개수

// ? 1️⃣ 배열이 이미 정렬되어 있다면?
// ? 정렬 과정이 불필요 => O(n + m) 시간, O(1) 공간으로 처리 가능.

// ? 2️⃣ nums1이 nums2보다 훨씬 작다면?
// ? 작은 배열을 해시 맵으로 사용하면 메모리 절약 가능.

//? 3️⃣ nums2가 너무 커서 메모리에 전부 올릴 수 없다면?
// ? 방법 1: 숫자 범위를 여러 구간으로 나누어 부분 처리
// ? 방법 2: 외부 정렬(External Sort) 후 순차 비교

var intersection = function (nums1, nums2) {
  const unique = new Set();
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;
  const m = nums1.length;
  const n = nums2.length;

  while (p1 < m && p2 < n) {
    const num1 = nums1[p1];
    const num2 = nums2[p2];

    // ! 처음에 조건 1만 early reutrn으로 분리하고 종료처리 안해서 오답
    if (num1 === num2) {
      unique.add(num1);
      p1++;
      p2++;
    } else if (num1 < num2) {
      p1++;
    } else {
      p2++;
    }
  }

  return [...unique];
};
