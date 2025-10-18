// * 문제..
// *

//

// * 모범 답안
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(1)
function solution(s) {
  let count = 0;
  for (const b of s) {
    if (b === '(') count++;
    else count--;
    if (count < 0) return false;
  }
  return count === 0 ? true : false;
}

// * 3차 풀이

// * 2차 풀이 - (25.10.18) - 정답
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(n)
function solution(s) {
  const stack = [];
  for (const bracket of s) {
    if (bracket === '(') {
      stack.push(bracket);
    } else {
      if (stack.length) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  // ! 처음에 이부분 빼먹어서 개수가 동일하지 않은 경우 처리 못함
  return stack.length ? false : true;
}

// * 1차 풀이

function solution(s) {
  var answer = true;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    if (bracket === '(') {
      stack.push(bracket);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  if (stack.length !== 0) return false;
  return answer;
}
