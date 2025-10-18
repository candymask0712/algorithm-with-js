// * 문제..
// *

//

// * 모범 답안
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(n)
function solution(s) {
  const nums = s.split(' ').map(Number);
  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
// ? 시간복잡도: O(n log n)
// ? 공간복잡도: O(n)
function solution(s) {
  const nums = s.split(' ');
  // ! sort((a,b) => a - b) 에서 암묵적으로 숫자형 변환
  // ! 정렬은 O(n log n)
  nums.sort((a, b) => a - b);
  return String(nums[0]) + ' ' + String(nums[nums.length - 1]);
}
