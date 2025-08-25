// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((candy) => {
    return candy + extraCandies >= max;
  });
};
