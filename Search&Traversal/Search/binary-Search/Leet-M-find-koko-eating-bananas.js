// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.09.06) - 정답
// ? 시간복잡도: O(n log m)
// getIsPossible 함수: O(n)
// max(piles) = M 이면 이분 탐색은 O(log M) 번 반복.
// ? 공간복잡도: O(1)

var minEatingSpeed = function (piles, h) {
  const max = Math.max(...piles);
  let lp = 0;
  let rp = max;

  while (lp <= rp) {
    const mid = Math.floor((rp + lp) / 2);
    const isPossible = getIsPossible(mid, h, piles);
    if (isPossible) {
      rp = mid - 1;
    } else {
      lp = mid + 1;
    }
  }
  return lp;
};

function getIsPossible(k, h, piles) {
  for (let i = 0; i < piles.length; i++) {
    const curH = Math.ceil(piles[i] / k);
    h -= curH;
  }
  if (h < 0) return false; // ! 0까지도 가능인데 <= 로 작성해서 시간 걸림
  return true;
}
