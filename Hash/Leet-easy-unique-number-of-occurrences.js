// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.08.23) - 정답
var uniqueOccurrences = function (arr) {
  const h = new Map();
  for (const num of arr) {
    h.set(num, h.get(num) + 1 || 0); // ! 실수로 증가로직 빼먹음
  }

  return new Set(h.values()).size === h.size; // ! size는 함수 아니고 values는 함수임
};
