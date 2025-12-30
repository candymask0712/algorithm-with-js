// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.10.09) - 틀림

var hIndex = function (citations) {
  citations.sort((a, b) => b - a); // 내림차순
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > h) h++;
    else break;
  }
  return h;
};
