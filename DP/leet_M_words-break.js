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

// 모범 풀이 - dp를 이용
function wordBreak(s, wordDict) {
  const n = s.length;
  const dp = Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}
