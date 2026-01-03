// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - ()
var maxConsecutiveAnswers = function (answerKey, k) {
  return Math.max(getLongest(answerKey, k, 'T'), getLongest(answerKey, k, 'F'));
};

var getLongest = function (str, k, char) {
  let lp = 0;
  let answer = 0;
  let count = 0;

  for (let rp = 0; rp < str.length; rp++) {
    const cur = str[rp];
    if (cur === char) {
      count++;
    }
    while (count > k) {
      if (str[lp] === char) {
        count--;
      }
      lp++;
    }

    answer = Math.max(answer, rp - lp + 1);
  }
  return answer;
};
