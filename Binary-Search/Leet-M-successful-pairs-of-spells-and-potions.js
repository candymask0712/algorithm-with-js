// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.09.07) - 정답
// ? 시간복잡도: O(m log m + n log m)
// potions 정렬 시간복잡도: O(m log m)
// spells 순회 + 이분 탐색: O(n log m)

// ? 공간복잡도: O(n)
// 결과를 담는 answer 배열: 길이 n

var successfulPairs = function (spells, potions, success) {
  const n = spells.length;
  const m = potions.length;
  const answer = [];
  potions.sort((a, b) => a - b); // ! 이분 탐색은 정렬여부 중요

  for (let i = 0; i < n; i++) {
    const curSpell = spells[i];
    let lp = 0;
    let rp = m - 1;

    while (lp <= rp) {
      const mid = Math.floor((rp + lp) / 2);
      const value = potions[mid] * curSpell;
      if (value >= success) {
        rp = mid - 1;
      } else {
        lp = mid + 1;
      }
    }
    const qualified = m - lp;
    answer.push(qualified);
  }
  return answer;
};
