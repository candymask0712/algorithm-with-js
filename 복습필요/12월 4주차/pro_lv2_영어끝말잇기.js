// 첫번째 풀이
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
