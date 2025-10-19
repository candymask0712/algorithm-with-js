// * 문제

// * 모범 답안

// * 3차 풀이
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(n)
function solution(n, words) {
  const hash = new Set();

  hash.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const cur = words[i];
    const prev = words[i - 1];

    if (hash.has(cur) || prev.at(-1) !== cur.at(0)) {
      const player = (i % n) + 1;
      const order = Math.floor(i / n) + 1;
      return [player, order];
    }

    hash.add(cur);
  }

  return [0, 0];
}

// * 2차 풀이
function solution(n, words) {
  var answer = [];

  const m = words.length;
  let prev = words[0];

  let used = [];
  used.push(words[0]);

  for (let i = 1; i < m; i++) {
    const current = words[i];
    const firstChar = current[0];
    const lastChar = prev[prev.length - 1];

    if (firstChar !== lastChar || used.includes(current)) {
      const trial = parseInt(i / n) + 1;
      const person = (i % n) + 1;

      console.log(n, i, person, trial);

      return [person, trial];
    }
    used.push(current);
    prev = current;
  }

  return [0, 0];
}

// * 1차 풀이
function solution(n, words) {
  let hash = new Map();
  hash.set(words[0], 1);

  for (let i = 1; i < words.length; i++) {
    const prevWord = words[i - 1];
    const curWord = words[i];

    if (hash.has(curWord) || prevWord.at(-1) !== curWord[0]) {
      // ! [번호, 차례] 배열의 0번째 인덱스와 실제 세상의 1번째 순서를 매칭하기 위한 보정값 필요
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    } else {
      hash.set(curWord, 1);
    }
  }

  return [0, 0];
}
