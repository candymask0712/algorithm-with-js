// 나의 풀이 - 1
// ! DP를 이용하지 않고 실제로 단어를 조작하는 방식
// ! 'aaaaaaa', ['aaa', 'aaaa'] 같은 엣지케이스를 대응하지 못함
var wordBreak = function (s, wordDict) {
  const n = s.length;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const chunk = s.slice(i, j + 1);
      if (wordDict.includes(chunk)) {
        s = s.slice(j + 1);
        i--;
      }
    }
  }
  return s.length ? false : true;
};
