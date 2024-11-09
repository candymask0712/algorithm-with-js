// 나의 풀이 - 1
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;

  const h1 = new Map();
  const h2 = new Map();

  for (let i = 0; i < words.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (h1.has(char)) {
      if (h1.get(char) !== word || h2.get(word) !== char) return false;
    } else {
      // ! 처음 풀이에서는 if (h2.has(word)) 조건 없음
      // ! h2.has(word)가 undefined일 때도 체크해서 오류
      if (h2.has(word)) {
        if (h2.get(word) !== char) return false;
      }

      h1.set(char, word);
      h2.set(word, char);
    }
  }
  return true;
};
