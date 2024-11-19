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

// 참고 풀이
function lengthOfLongestSubstring(s) {
  // 문자의 마지막 등장 위치를 저장하는 Map
  const charMap = new Map();
  let maxLength = 0;
  let start = 0;

  // 문자열을 순회하면서 각 문자의 위치를 검사
  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    // 현재 문자가 이미 등장했고, 그 위치가 시작점 이후라면
    if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
      // 시작점을 이전에 등장한 위치 다음으로 이동
      start = charMap.get(currentChar) + 1;
    }

    // 현재 문자의 위치를 저장
    charMap.set(currentChar, end);

    // 최대 길이 갱신
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
