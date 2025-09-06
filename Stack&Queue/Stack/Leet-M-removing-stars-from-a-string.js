// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.08.26) - 정답 보고 풀이
var removeStars = function (s) {
  const stack = [];
  for (const char of s) {
    if (char === '*') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
};
