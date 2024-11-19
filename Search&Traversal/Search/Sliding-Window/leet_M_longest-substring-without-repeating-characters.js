// 나의 풀이 - 1
var lengthOfLongestSubstring = function (s) {
  const n = s.length;
  let lp = 0;
  let len = 0;
  let answer = 0;

  for (let rp = 0; rp < n; rp++) {
    const h = new Map();
    lp = rp;
    let curChar = s[lp];

    while (!h.has(curChar) && lp >= 0) {
      h.set(curChar, 1);
      lp--;
      curChar = s[lp];
      len++;
    }
    answer = Math.max(answer, len);
    len = 0;
  }
  return answer;
};
