// * 문제
// *

//
//

// * 모범 답안
var largestAltitude = function (gain) {
  // acc: [누적합, 최댓값]
  const [, maxAltitude] = gain.reduce(
    (acc, g) => {
      const nextSum = acc[0] + g;
      return [nextSum, nextSum > acc[1] ? nextSum : acc[1]];
    },
    [0, 0]
  );
  return maxAltitude;
};
// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.08.23) - 정답
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let highest = 0;
  let curAltitude = 0;
  for (const curGain of gain) {
    curAltitude += curGain;
    highest = Math.max(curAltitude, highest);
  }
  return highest;
};
