// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이

var runningSum = function (nums) {
  let prevSum = 0;
  let answer = [];

  for (const num of nums) {
    const sum = prevSum + num;
    answer.push(sum);
    prevSum = sum;
  }

  return answer;
};
