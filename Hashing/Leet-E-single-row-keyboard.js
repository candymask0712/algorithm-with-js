// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이 - (26.01.02) - 정답
//? 시간복잡도: O(n) (n = word.length)
//? 공간복잡도: O(1)

var calculateTime = function (keyboard, word) {
  let answer = 0;
  const keyMap = new Map();
  for (let i = 0; i < keyboard.length; i++) {
    keyMap.set(keyboard[i], i);
  }

  let curIdx = 0;
  for (const char of word) {
    const nextIdx = keyMap.get(char);
    const diff = Math.min(
      Math.abs(nextIdx - curIdx),
      Math.abs(curIdx - nextIdx)
    );
    answer += diff;

    curIdx = nextIdx;
  }
  return answer;
};

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
