// * 문제
// *

//
//

// * 모범 답안
// * 방법 ① — 비트 연산을 이용한 반복 계산 (Brian Kernighan’s Algorithm)
//  & (n - 1) 은 n의 가장 오른쪽에 있는 1비트를 제거합니다.
// 이 연산을 n이 0이 될 때까지 반복하면서 횟수를 세면 됩니다.

var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    n &= n - 1; // 가장 낮은 1비트 제거
    count++;
  }
  return count;
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.11.08) - 성공
// ? k : n의 비트수
// ? 시간복잡도: O(k) + 문자열/배열 생성 오버헤드
// ? 공간복잡도: O(k)
var hammingWeight = function (n) {
  return n.toString(2).split('1').length - 1;
};
