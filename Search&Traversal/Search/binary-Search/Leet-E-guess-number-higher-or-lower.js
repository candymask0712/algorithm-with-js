// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.09.07) - 정답
// ? 시간복잡도: O(logn)
// ? 공간복잡도: O(1)
var guessNumber = function (n) {
  let lp = 1;
  let rp = n;

  while (lp <= rp) {
    const mid = Math.floor((rp + lp) / 2);
    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === 1) {
      // ! 문제를 자세히 읽지 않아 반대로 설정
      lp = mid + 1;
    } else {
      rp = mid - 1;
    }
  }
};
