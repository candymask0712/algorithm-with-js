// * 문제
// *

//
//

// * 모범 답안
var letterCombinations = function (digits) {
  if (!digits) return []; // ! 우선적으로 예외처리

  // ! 자바스크립트에서 객체의 key는 항상 문자열(String) 또는 심볼(Symbol)
  // map[2]; // 숫자 2 → 문자열 "2"로 자동 변환 → "abc"
  // map['2']; // 원래부터 문자열 "2" → "abc"

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const res = [];
  const path = [];

  function dfs(idx) {
    if (idx === digits.length) {
      res.push(path.join(''));
      return;
    }
    const letters = map[digits[idx]];
    for (const ch of letters) {
      path.push(ch);
      dfs(idx + 1);
      path.pop();
    }
  }

  dfs(0);
  return res;
};

// * 3차 풀이

// * 2차 풀이 - (25.09.06) - 정답 (AI 가이드 참고)
const KEY_PAD = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

var letterCombinations = function (digits) {
  let answer = [];
  if (digits.length === 0) return answer;

  function DFS(digits) {
    if (digits.length === 0) {
      return;
    }

    const curDigit = digits[0];
    const curPad = KEY_PAD[curDigit];

    const nextAnswer = [];

    for (let i = 0; i < answer.length; i++) {
      const curCombination = answer[i];
      for (let j = 0; j < curPad.length; j++) {
        const nextCombination = curCombination + curPad[j];
        nextAnswer.push(nextCombination);
      }
    }
    answer = nextAnswer;
    DFS(digits.slice(1, digits.length));
  }
  answer = KEY_PAD[digits[0]].split('');
  DFS(digits.slice(1, digits.length));

  return answer;
};

// * 1차 풀이 - (25.09.06) - 틀림
// ! 그림을 꼼꼼히 보지 못해 알파벳을 잘라서 쓸 생각을 함
const ALPABET = 'abcdefghijklmnopqrstuvwxyz';
var letterCombinations = function (digits) {
  let answer = [];

  // ! 불필요하게 인자 두 개 전달
  function DFS(digits, list) {
    if (digits.length === 0) {
      answer = list;
      return;
    }
    const digit = Number(digits[0]);
    const alphabets =
      digit !== 9 ? ALPABET.slice(0, (digit - 1) * 3) : ALPABET.slice(-4);
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      let cur = list[i];
      for (let j = 0; j < alphabets.length; j++) {
        arr.push(cur + alphabets[j]);
      }
    }
  }
  const digit = digits[0];
  const alphabets =
    digit !== 9 ? ALPABET.slice(0, (digit - 1) * 3) : ALPABET.slice(-4);
  DFS(digits.slice(1, digits.length - 1), alphabets.split(''));

  return answer;
};
