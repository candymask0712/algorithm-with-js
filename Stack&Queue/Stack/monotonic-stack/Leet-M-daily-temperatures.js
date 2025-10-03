// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.09.16) - 실패(정답보고 풀이)
// ! 스택의 아래값들은 제대로 비교되지 않는지 질문
// 스택에 들어가는 순간, 그 값은 “아직 더 큰 값을 못 만난 상태”예요.
// 그리고 새로운 값이 들어올 때마다 top이랑만 비교하면서
// 	•	조건 만족 → pop (해결 완료)
// 	•	조건 불만족 → push (아직 대기)

// 이 과정을 반복하다 보면 아래 값들은 이미 top과의 비교에서 결과가 결정됐으므로 다시 볼 필요가 없어요.

var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const answer = Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    const cur = temperatures[i];
    while (stack.length && cur > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }
  return answer;
};
