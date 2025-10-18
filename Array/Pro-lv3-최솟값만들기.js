// * 문제..
// *

//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.10.18) - 정답
// ? 시간복잡도: O(n log n)
// ? 공간복잡도: O(n)
// ? (이론상은 제자리 정렬이라 O(1)처럼 보이지만, 실제 구현은 보조 배열을 사용하므로 O(n)이 더 정확함)

function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  A.forEach((el, i) => (answer += A[i] * B[i]));
  return answer;
}
