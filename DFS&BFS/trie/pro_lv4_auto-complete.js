// 해설 링크
// https://velog.io/@kimdukbae/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%ED%8A%B8%EB%9D%BC%EC%9D%B4-Trie

// 예시 답안
function solution(words) {
  class TrieNode {
      constructor() {
          this.children = new Map();
          this.isEndOfWord = false;
          this.wordCount = 0;
      }
  }

  const root = new TrieNode();

  // 트라이에 단어 삽입
  function insertWord(word) {
      let node = root;
      for (const char of word) {
          if (!node.children.has(char)) {
              node.children.set(char, new TrieNode());
          }
          node = node.children.get(char);
          node.wordCount++;
      }
      node.isEndOfWord = true;
  }

  // 필요한 문자 수 계산
  function countChars(word) {
      let node = root;
      let count = 0;
      for (let i = 0; i < word.length; i++) {
          node = node.children.get(word[i]);
          count++;
          if (node.wordCount === 1) {
              break;
          }
      }
      return count;
  }

  // 모든 단어를 트라이에 삽입
  for (const word of words) {
      insertWord(word);
  }

  // 각 단어에 대해 필요한 문자 수 계산 및 합산
  let totalChars = 0;
  for (const word of words) {
      totalChars += countChars(word);
  }

  return totalChars;
}


