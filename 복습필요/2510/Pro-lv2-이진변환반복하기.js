// * 문제..
// *

//

// * 모범 답안
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(1)
function solution(s) {
  let deletedZeroCount = 0;
  let trials = 0;
  while (s !== '1') {
    trials++;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '0') count++;
    }
    deletedZeroCount += count;
    s = (s.length - count).toString(2);
  }
  return [trials, deletedZeroCount];
}

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(n)
// ? replace가 새로운 문자열을 생성함

function solution(s) {
  let deletedZeroCount = 0;
  let trials = 0;
  while (s !== '1') {
    trials++;
    const prevLength = s.length;
    // ! 2번이상 변환하려면 g플래그 필수
    s = s.replace(/0/g, '');
    const nextLength = s.length;
    deletedZeroCount += prevLength - nextLength;
    // ! 2진법 변환은 숫자에 toString(2) 메서드 사용시에만 가능
    s = nextLength.toString(2);
  }
  return [trials, deletedZeroCount];
}
