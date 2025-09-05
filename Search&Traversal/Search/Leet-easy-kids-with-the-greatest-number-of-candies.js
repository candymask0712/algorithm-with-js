// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 (25.08.20) - 정답
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandy = Math.max(...candies);
  const answer = [];
  for (const candy of candies) {
    answer.push(candy + extraCandies >= maxCandy);
  }
  return answer;
};
